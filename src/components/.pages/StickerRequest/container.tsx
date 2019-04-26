import { INTERNAL_SERVER_ERROR, NO_CONTENT, OK } from 'http-status';
import { ComponentType } from 'react';
import api from 'services/api';
import sentry from 'services/sentry';

interface StickerRequest {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  street: string;
  bus: string;
  postalCode: string;
  city: string;
  note: string;
  emailConfirmedAt: Date | null;
  rejectedAt: Date | null;
  sentAt: Date | null;
}

interface MappedProps {
  stickerRequest: StickerRequest | null;
}

const getStickerRequest = async (
  id: string,
): Promise<StickerRequest | null> => {
  try {
    const { status, data } = await api.get(`/sticker-requests/${id}`);

    if (status !== OK) {
      return null;
    }

    return data;
  } catch (e) {
    sentry.captureException(e);
  }

  return null;
};

const confirmStickerRequest = async (id: string): Promise<boolean> => {
  try {
    const { status } = await api.post(`/sticker-requests/${id}/confirm-email`);

    if (status !== NO_CONTENT) {
      return false;
    }

    return true;
  } catch (e) {
    sentry.captureException(e);
  }

  return false;
};

export default function withContainer<Props>(
  WrappedComponent: ComponentType<Props>,
): ComponentType<Props & MappedProps> {
  const Component = (props: Props & MappedProps) => {
    return <WrappedComponent {...props} />;
  };

  Component.getInitialProps = async ({ ctx }: any) => {
    const { query, isServer, res } = ctx;
    const { id } = query;

    let stickerRequest: StickerRequest | null = null;
    if (id) {
      stickerRequest = await getStickerRequest(id);
    }

    if (stickerRequest) {
      await confirmStickerRequest(id);
    } else {
      res.statusCode = INTERNAL_SERVER_ERROR;
    }

    return { isServer, stickerRequest };
  };

  return Component;
}

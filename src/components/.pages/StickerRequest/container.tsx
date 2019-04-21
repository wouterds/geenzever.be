import { INTERNAL_SERVER_ERROR, OK } from 'http-status';
import { ComponentType } from 'react';
import api from 'services/api';
import sentry from 'services/sentry';

interface MappedProps {
  stickerRequest: {
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
  } | null;
}

export default function withContainer<Props>(
  WrappedComponent: ComponentType<Props>,
): ComponentType<Props & MappedProps> {
  const Component = (props: Props & MappedProps) => {
    return <WrappedComponent {...props} />;
  };

  Component.getInitialProps = async ({ ctx }: any) => {
    const { query, isServer, res } = ctx;
    const { id } = query;

    let stickerRequest = null;

    if (id) {
      try {
        const { status, data } = await api.get(`/sticker-requests/${id}`);

        if (status === OK) {
          stickerRequest = data;
        }
      } catch (e) {
        sentry.captureException(e);
      }
    }

    if (!stickerRequest) {
      res.statusCode = INTERNAL_SERVER_ERROR;
    }

    return { isServer, stickerRequest };
  };

  return Component;
}

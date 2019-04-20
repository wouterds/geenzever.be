import { BAD_REQUEST, CONFLICT, NO_CONTENT } from 'http-status';
import { ComponentType, useState } from 'react';
import ApiService from 'services/api';

interface MappedProps {
  status: string | null;
  isLoading: boolean;
  requestStickers: (
    firstName: string,
    lastName: string,
    email: string,
    streetAndNumber: string,
    busNumber: string,
    postalCode: string,
    city: string,
  ) => Promise<void>;
}

export default function withContainer<Props>(
  WrappedComponent: ComponentType<Props>,
): ComponentType<Props & MappedProps> {
  const Component = (props: Props & MappedProps) => {
    const [status, setStatus] = useState<string | null>(null);

    const requestStickers = async (
      firstName: string,
      lastName: string,
      email: string,
      streetAndNumber: string,
      busNumber: string,
      postalCode: string,
      city: string,
    ): Promise<void> => {
      setStatus('LOADING');

      const payload = {
        firstName,
        lastName,
        email,
        streetAndNumber,
        busNumber,
        postalCode,
        city,
      };

      try {
        const { status: statusCode } = await ApiService.post(
          '/request-stickers',
          payload,
        );

        if (statusCode !== NO_CONTENT) {
          setStatus('ERROR');
          return;
        }

        setStatus('SUCCESS');
      } catch (e) {
        const { status: statusCode } = e.response;

        if (statusCode === CONFLICT) {
          setStatus('ERROR_DUPLICATE');
          return;
        }

        if (statusCode === BAD_REQUEST) {
          setStatus('ERROR_BAD_REQUEST');
          return;
        }

        setStatus('ERROR');
      }
    };

    return (
      <WrappedComponent
        {...props}
        status={status}
        requestStickers={requestStickers}
        isLoading={status === 'LOADING'}
      />
    );
  };

  return Component;
}

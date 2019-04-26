import { Request, Response } from 'express';
import { INTERNAL_SERVER_ERROR, NOT_FOUND } from 'http-status';
import StickerRequestRepository from 'repositories/sticker-request';
import sentry from 'services/sentry';

export default async (req: Request, res: Response): Promise<Response> => {
  try {
    const { id } = req.params;

    const stickerRequest = await StickerRequestRepository.getById(id);

    if (!stickerRequest) {
      return res.sendStatus(NOT_FOUND);
    }

    if (!stickerRequest.emailConfirmedAt) {
      await StickerRequestRepository.update(id, {
        emailConfirmedAt: new Date(),
      });
    }

    return res.json({
      ...stickerRequest,
      emailConfirmedAt: new Date(),
    });
  } catch (e) {
    // tslint:disable-next-line
    console.error(e);

    sentry.captureException(e);

    return res.sendStatus(INTERNAL_SERVER_ERROR);
  }
};

import { Request, Response } from 'express';
import {
  BAD_REQUEST,
  CONFLICT,
  INTERNAL_SERVER_ERROR,
  NO_CONTENT,
} from 'http-status';
import StickerRequestRepository from 'repositories/sticker-request';
import sentry from 'services/sentry';
import { isEmail } from 'validator';

export default async (req: Request, res: Response): Promise<Response> => {
  const {
    firstName,
    lastName,
    email,
    street,
    bus,
    postalCode,
    city,
    note,
  } = req.body;

  if (!firstName || !lastName || !email || !street || !postalCode || !city) {
    return res.sendStatus(BAD_REQUEST);
  }

  if (!isEmail(email)) {
    return res.sendStatus(BAD_REQUEST);
  }

  try {
    await StickerRequestRepository.add({
      firstName,
      lastName,
      email,
      street,
      bus: bus ? bus : null,
      postalCode,
      city,
      note: note ? note : null,
    });
  } catch (e) {
    // tslint:disable-next-line
    console.error(e);

    sentry.captureException(e);

    if (e.name === 'SequelizeUniqueConstraintError') {
      return res.sendStatus(CONFLICT);
    }

    return res.sendStatus(INTERNAL_SERVER_ERROR);
  }

  return res.sendStatus(NO_CONTENT);
};

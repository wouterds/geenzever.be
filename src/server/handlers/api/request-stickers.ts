import { Request, Response } from 'express';
import {
  BAD_REQUEST,
  CONFLICT,
  INTERNAL_SERVER_ERROR,
  NO_CONTENT,
} from 'http-status';
import StickerRequest from 'models/sticker-request';
import { isEmail } from 'validator';

export default async (req: Request, res: Response): Promise<Response> => {
  const {
    firstName,
    lastName,
    email,
    streetAndNumber,
    busNumber,
    postalCode,
    city,
  } = req.body;

  if (
    !firstName ||
    !lastName ||
    !email ||
    !streetAndNumber ||
    !postalCode ||
    !city
  ) {
    return res.sendStatus(BAD_REQUEST);
  }

  if (!isEmail(email)) {
    return res.sendStatus(BAD_REQUEST);
  }

  try {
    await StickerRequest.create({
      firstName,
      lastName,
      email,
      streetAndNumber,
      busNumber,
      postalCode,
      city,
    });
  } catch (e) {
    if (e.name === 'SequelizeUniqueConstraintError') {
      return res.sendStatus(CONFLICT);
    }

    return res.sendStatus(INTERNAL_SERVER_ERROR);
  }

  return res.sendStatus(NO_CONTENT);
};

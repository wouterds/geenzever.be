import { Request, Response } from 'express';
import {
  BAD_REQUEST,
  CONFLICT,
  INTERNAL_SERVER_ERROR,
  NO_CONTENT,
} from 'http-status';
import StickerRequest from 'models/sticker-request';
import { sendMail } from 'services/mail';
import { t } from 'services/translation';
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
    const stickerRequest = await StickerRequest.create({
      firstName,
      lastName,
      email,
      streetAndNumber,
      busNumber,
      postalCode,
      city,
    });

    const url = `${process.env.BASE_URL}/get-stickers/${stickerRequest.id}`;

    await sendMail(
      [stickerRequest.email],
      t('mail.stickers-requested.subject'),
      t('mail.stickers-requested.text', { firstName, url }),
    );
  } catch (e) {
    if (e.name === 'SequelizeUniqueConstraintError') {
      return res.sendStatus(CONFLICT);
    }

    return res.sendStatus(INTERNAL_SERVER_ERROR);
  }

  return res.sendStatus(NO_CONTENT);
};

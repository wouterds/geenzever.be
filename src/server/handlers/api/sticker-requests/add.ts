import { Request, Response } from 'express';
import {
  BAD_REQUEST,
  CONFLICT,
  INTERNAL_SERVER_ERROR,
  NO_CONTENT,
} from 'http-status';
import StickerRequestRepository from 'repositories/sticker-request';
import { sendMail } from 'services/mail';
import sentry from 'services/sentry';
import { t } from 'services/translation';
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
    const stickerRequest = await StickerRequestRepository.add({
      firstName,
      lastName,
      email,
      street,
      bus: bus ? bus : null,
      postalCode,
      city,
      note: note ? note : null,
    });

    const url = `${process.env.BASE_URL}/sticker-request/${stickerRequest.id}`;

    await sendMail(
      [stickerRequest.email],
      t('mail.stickers-requested.subject'),
      t('mail.stickers-requested.text', {
        firstName,
        lastName,
        street,
        bus,
        postalCode,
        city,
        url,
      }),
    );

    await sendMail(
      ['info@geenzever.be'],
      t('mail.admin.stickers-requested.subject', { city, firstName }),
      t('mail.admin.stickers-requested.text', {
        firstName,
        lastName,
        email,
        street,
        bus,
        postalCode,
        city,
        note,
      }),
    );
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

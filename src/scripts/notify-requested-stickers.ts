import StickerRequestRepository from 'repositories/sticker-request';
import cache, { CacheKey } from 'services/cache';
import { sendMail } from 'services/mail';
import sentry from 'services/sentry';
import { t } from 'services/translation';

(async () => {
  const stickerRequests = await StickerRequestRepository.getRecentlyAdded();

  const notifiedRequested: string[] = JSON.parse(
    (await cache.fetch(CacheKey.NotifiedRequested)) || '[]',
  );

  for (const stickerRequest of stickerRequests) {
    if (notifiedRequested.includes(stickerRequest.id)) {
      continue;
    }

    try {
      const {
        firstName,
        lastName,
        email,
        street,
        bus,
        postalCode,
        city,
        note,
      } = stickerRequest;

      const url = `${process.env.BASE_URL}/sticker-request/${
        stickerRequest.id
      }`;

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

      await cache.store(
        CacheKey.NotifiedRequested,
        JSON.stringify([...notifiedRequested, stickerRequest.id]),
      );
    } catch (e) {
      sentry.captureException(e);
    }
  }

  process.exit(0);
})().catch(e => {
  sentry.captureException(e);
  // tslint:disable-next-line
  console.error(e);
  process.exit(1);
});

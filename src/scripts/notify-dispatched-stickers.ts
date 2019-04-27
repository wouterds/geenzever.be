import StickerRequestRepository from 'repositories/sticker-request';
import cache, { CacheKey } from 'services/cache';
import { sendMail } from 'services/mail';
import sentry from 'services/sentry';
import { t } from 'services/translation';

(async () => {
  const stickerRequests = await StickerRequestRepository.getRecentlyDispatched();

  const notifiedDispatched: string[] = JSON.parse(
    (await cache.fetch(CacheKey.NotifiedDispatched)) || '[]',
  );

  for (const stickerRequest of stickerRequests) {
    if (notifiedDispatched.includes(stickerRequest.id)) {
      continue;
    }

    try {
      await sendMail(
        [stickerRequest.email],
        t('mail.stickers-dispatched.subject'),
        t('mail.stickers-dispatched.text', {
          firstName: stickerRequest.firstName,
          lastName: stickerRequest.lastName,
          street: stickerRequest.street,
          bus: stickerRequest.bus ? stickerRequest.bus : '',
          postalCode: stickerRequest.postalCode,
          city: stickerRequest.city,
        }),
      );

      await cache.store(
        CacheKey.NotifiedDispatched,
        JSON.stringify([...notifiedDispatched, stickerRequest.id]),
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

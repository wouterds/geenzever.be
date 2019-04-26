import StickerRequestRepository from 'repositories/sticker-request';
import cache, { CacheKey } from 'services/cache';
import sentry from 'services/sentry';

(async () => {
  const stickerRequests = await StickerRequestRepository.getRecentlyDispatched();

  const notifiedDispatched: string[] = JSON.parse(
    (await cache.fetch(CacheKey.NotifiedDispatched)) || '[]',
  );

  for (const stickerRequest of stickerRequests) {
    if (notifiedDispatched.includes(stickerRequest.id)) {
      continue;
    }

    // todo: sent mail

    await cache.store(
      CacheKey.NotifiedDispatched,
      JSON.stringify([...notifiedDispatched, stickerRequest.id]),
    );
  }
})().catch(sentry.captureException);

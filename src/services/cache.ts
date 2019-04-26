import redis from 'redis';
import { promisify } from 'util';

const client = redis.createClient({
  host: process.env.REDIS_HOST,
});

const setAsync = promisify(client.set).bind(client);
const getAsync = promisify(client.get).bind(client);

export enum CacheKey {
  NotifiedRequested = 'NotifiedRequested',
  NotifiedDispatched = 'NotifiedDispatched',
}

export const store = async (key: string, value: string) => {
  await setAsync(key, value);
};

export const fetch = async (key: string): Promise<string | null> => {
  return getAsync(key) || null;
};

export default {
  CacheKey,
  store,
  fetch,
};

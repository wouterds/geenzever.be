import StickerRequest, { Definition } from 'models/sticker-request';

export const add = async (data: {
  firstName?: string;
  lastName?: string;
  email?: string;
  street?: string;
  bus?: string | null;
  postalCode?: string;
  city?: string;
  note?: string | null;
  emailConfirmedAt?: Date | null;
  rejectedAt?: Date | null;
  dispatchedAt?: Date | null;
}): Promise<Definition> => {
  const stickerRequest = await StickerRequest.create(data);

  return stickerRequest.get({ plain: true });
};

export const getById = async (id: string): Promise<Definition | null> => {
  const stickerRequest = await StickerRequest.findOne({ where: { id } });

  if (stickerRequest) {
    return stickerRequest.get({ plain: true });
  }

  return null;
};

export const update = async (
  id: string,
  data: {
    firstName?: string;
    lastName?: string;
    email?: string;
    street?: string;
    bus?: string | null;
    postalCode?: string;
    city?: string;
    note?: string | null;
    emailConfirmedAt?: Date | null;
    rejectedAt?: Date | null;
    dispatchedAt?: Date | null;
  },
): Promise<void> => {
  await StickerRequest.update(data, { where: { id } });
};

export default {
  add,
  getById,
  update,
};

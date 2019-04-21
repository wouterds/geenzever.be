import { DataTypes, Model } from 'sequelize';
import sequelize from 'services/database';

export interface Definition {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  street: string;
  bus?: string | null;
  postalCode: string;
  city: string;
  note?: string | null;
  emailConfirmedAt?: Date | null;
  approvedAt?: Date | null;
  rejectedAt?: Date | null;
  sentAt?: Date | null;
}

class StickerRequest extends Model {}
StickerRequest.init(
  {
    id: {
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    firstName: { type: DataTypes.STRING(32), allowNull: false },
    lastName: { type: DataTypes.STRING(32), allowNull: false },
    email: { type: DataTypes.STRING(64), allowNull: false },
    street: { type: DataTypes.STRING(64), allowNull: false },
    bus: { type: DataTypes.STRING(8), allowNull: true },
    postalCode: { type: DataTypes.STRING(8), allowNull: false },
    city: { type: DataTypes.STRING(32), allowNull: false },
    note: { type: DataTypes.TEXT, allowNull: true },
    emailConfirmedAt: { type: DataTypes.DATE, allowNull: true },
    approvedAt: { type: DataTypes.DATE, allowNull: true },
    rejectedAt: { type: DataTypes.DATE, allowNull: true },
    sentAt: { type: DataTypes.DATE, allowNull: true },
  },
  {
    sequelize,
    modelName: 'sticker-request',
    indexes: [
      {
        unique: true,
        fields: ['email'],
      },
      {
        fields: ['emailConfirmedAt'],
      },
      {
        fields: ['approvedAt'],
      },
      {
        fields: ['createdAt'],
      },
      {
        fields: ['sentAt'],
      },
    ],
  },
);

export default StickerRequest;

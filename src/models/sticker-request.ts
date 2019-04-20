import { DataTypes } from 'sequelize';
import db from 'services/database';

export interface Definition {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  streetAndNumber: string;
  busNumber?: string | null;
  postalCode: string;
  city: string;
  emailConfirmedAt?: Date | null;
  approvedAt?: Date | null;
  rejectedAt?: Date | null;
  sentAt?: Date | null;
}

export default db.define(
  'sticker-request',
  {
    id: {
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    firstName: { type: DataTypes.STRING(32), allowNull: false },
    lastName: { type: DataTypes.STRING(32), allowNull: false },
    email: { type: DataTypes.STRING(64), allowNull: false },
    streetAndNumber: { type: DataTypes.STRING(64), allowNull: false },
    busNumber: { type: DataTypes.STRING(8), allowNull: true },
    postalCode: { type: DataTypes.STRING(8), allowNull: false },
    city: { type: DataTypes.STRING(32), allowNull: false },
    emailConfirmedAt: { type: DataTypes.DATE, allowNull: true },
    approvedAt: { type: DataTypes.DATE, allowNull: true },
    rejectedAt: { type: DataTypes.DATE, allowNull: true },
    sentAt: { type: DataTypes.DATE, allowNull: true },
  },
  {
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

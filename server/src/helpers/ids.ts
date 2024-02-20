import { customAlphabet, nanoid } from 'nanoid';
const crypto = require('crypto');

export const createPollId = customAlphabet(
  '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ', 8
);

export const createUserId = () => nanoid();
export const createNominationId = () => nanoid(8);

export const createUserId2 = () => crypto.randomBytes(21).toString('hex')
export const createNominationId2 = () => crypto.randomBytes(8).toString('hex')

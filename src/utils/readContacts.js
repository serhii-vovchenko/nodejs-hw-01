import { promises as fs } from 'node:fs';
import { PATH_DB } from '../constants/contacts.js';

export const readContacts = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    return data;
  } catch (error) {
    console.error('Error reading contacts', error);
  }
};

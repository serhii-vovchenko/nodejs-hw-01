import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const removeAllContacts = async () => {
  try {
    await fs.writeFile(PATH_DB, '[]', 'utf-8');
  } catch (error) {
    console.error('Error, failed to delete all contacts', error);
  }
};

removeAllContacts();

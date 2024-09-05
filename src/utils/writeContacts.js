import fs from 'node:fs/promises';

import { PATH_DB } from '../constants/contacts.js';
import { readContacts } from './readContacts.js';

export const writeContacts = async (updatedContacts) => {
  try {
    const data = await readContacts();
    const newData = [...data, ...updatedContacts];
    await fs.writeFile(PATH_DB, JSON.stringify(newData, null, 2), 'utf-8');
    return newData;
  } catch (error) {
    console.error('Error writing contacts', error);
  }
};

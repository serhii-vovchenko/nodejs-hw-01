import { PATH_DB } from '../constants/contacts.js';
import { readContacts } from '../utils/readContacts.js';
import fs from 'node:fs/promises';

export const removeLastContact = async () => {
  try {
    const fetchContacts = await readContacts();
    const deleteLastContact = fetchContacts.slice(0, -1);

    await fs.writeFile(
      PATH_DB,
      JSON.stringify(deleteLastContact, null, 2),
      'utf-8',
    );
  } catch (error) {
    console.error('Error, failed to delete the last contact', error);
  }
};

removeLastContact();

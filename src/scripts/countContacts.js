import { readContacts } from '../utils/readContacts.js';

export const countContacts = async () => {
  try {
    const data = await readContacts();
    return data.length;
  } catch (error) {
    console.error('Error, cannot count the number of contacts.', error);
  }
};

console.log(await countContacts());

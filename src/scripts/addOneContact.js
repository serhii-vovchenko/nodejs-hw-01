import { createFakeContact } from '../utils/createFakeContact.js';
import { writeContacts } from '../utils/writeContacts.js';

export const addOneContact = async () => {
  try {
    const newContact = await createFakeContact();
    await writeContacts([newContact]);
  } catch (error) {
    console.error('Error add contact', error);
  }
};

addOneContact();

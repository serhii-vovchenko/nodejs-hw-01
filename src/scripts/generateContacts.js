import { createFakeContact } from '../utils/createFakeContact.js';
import { writeContacts } from '../utils/writeContacts.js';

const generateContacts = async (number) => {
  if (number <= 0) {
    return;
  }

  try {
    const createSomeContacts = [];
    for (let i = 0; i < number; i += 1) {
      const newContact = createFakeContact();
      createSomeContacts.push(newContact);
    }
    await writeContacts(createSomeContacts);
  } catch (error) {
    console.error(`Error, failed to generate ${number} contacts`, error);
  }
};

generateContacts(5);

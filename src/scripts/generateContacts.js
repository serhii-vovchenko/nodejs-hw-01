import { createFakeContact } from '../utils/createFakeContact.js';
import { writeContacts } from '../utils/writeContacts.js';

const generateContacts = async (number) => {
  const createSomeContacts = [];
  for (let i = 0; i < number; i += 1) {
    const newContact = createFakeContact();
    createSomeContacts.push(newContact);
  }
  writeContacts(createSomeContacts);
};

generateContacts(5);

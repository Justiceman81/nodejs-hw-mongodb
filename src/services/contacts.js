import { ContactsCollection } from '../db/models/contact.js';

export const getAllContacts = () => {
  return ContactsCollection.find();
};

export const getContactById = (contactId) => {
  return ContactsCollection.findById({ contactId });
};

export const createContact = (contact) => {
  return ContactsCollection.create(contact);
};

export const changeContactFavourite = async (contactId, payload) => {
  const updatedContact = await ContactsCollection.findOneAndUpdate(
    contactId,
    { _id: contactId },
    payload,
    {
      new: true,
    },
  );
  return updatedContact;
};

export const deleteContact = async (contactId) => {
  return await ContactsCollection.findOneAndDelete({ contactId });
};

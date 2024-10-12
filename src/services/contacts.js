import { ContactsCollection } from '../db/models/contact.js';

export const getAllContacts = () => {
  return ContactsCollection.find();
};

export const getContactById = (contactId) => {
  return ContactsCollection.findById(contactId);
};

export const createContact = (contact) => {
  return ContactsCollection.create(contact);
};

export const changeContactFavourite = (contactId, isFavourite) => {
  return ContactsCollection.findByIdAndUpdate(
    contactId,
    { isFavourite },
    { new: true },
  );
};

export const deleteContact = (contactId) => {
  return ContactsCollection.findByIdAndDelete(contactId);
};

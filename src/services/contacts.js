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

export const changeContactFavourite = async (contactId, payload) => {
  return ContactsCollection.findOneAndUpdate({ _id: contactId }, payload, {
    new: true,
  });
};

export const deleteContact = async (contactId) => {
  return ContactsCollection.findOneAndDelete({ _id: contactId });
};

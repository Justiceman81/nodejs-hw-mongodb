import createHttpError from 'http-errors';

import {
  getAllContacts,
  getContactById,
  createContact,
  changeContactFavourite,
  deleteContact,
} from '../services/contacts.js';

export const getAllContactsController = async (req, res, next) => {
  const contacts = await getAllContacts();
  res.status(200).json({
    status: 200,
    message: 'Successfully fetch contacts!',
    data: contacts,
  });
};

export const getContactByIdController = async (req, res, next) => {
  const { contactId } = req.params;
  const contact = await getContactById(contactId);
  if (contact === null) {
    return next(new createHttpError('Contact not found!:('));
  }
  res.json({
    status: 200,
    message: 'Successfully fetch contact!',
    data: contact,
  });
};

export const createContactController = async (req, res) => {
  const contact = {
    name: req.body.name,
    phoneNumber: req.body.phoneNumber,
    email: req.body.email,
    isFavourite: req.body.isFavourite,
    contactType: req.body.contactType,
  };

  const newContact = await createContact(contact);
  res.status(201).json({
    status: 201,
    message: 'Successfully created contact!',
    data: newContact,
  });
};

export const changeContactFavouriteController = async (req, res) => {
  const { contactId } = req.params;
  const isFavourite = req.body.isFavourite;
  const updatedContact = await changeContactFavourite(contactId, isFavourite);
  if (updatedContact === null) {
    throw new createHttpError(404, 'Contact not found!:(');
  }
  res.json({
    status: 200,
    message: 'Successfully patched a contact!',
    data: updatedContact,
  });
};

export const deleteContactController = async (req, res, next) => {
  const { contactId } = req.params;
  const deletedContact = await deleteContact(contactId);
  if (deletedContact === null) {
    throw createHttpError(404, 'Contact not found!:(');
  }

  res.status(200).json({
    status: 200,
    message: 'Successfully deleted contact!',
    data: deletedContact,
  });
};
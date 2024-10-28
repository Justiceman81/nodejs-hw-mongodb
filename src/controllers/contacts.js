import createHttpError from 'http-errors';

import {
  getAllContacts,
  getContactById,
  createContact,
  changeContactFavourite,
  deleteContact,
} from '../services/contacts.js';
import { parsePaginationParams } from '../utils/parsePaginationParams.js';
import { parseSortParams } from '../utils/parseSortParams.js';
import { parseFilterParams } from '../utils/parseFilterParams.js';

export const getAllContactsController = async (req, res) => {
  const { _id: userId } = req.user;
  const { page, perPage } = parsePaginationParams(req.query);
  const { sortBy, sortOrder } = parseSortParams(req.query);
  const filter = { ...parseFilterParams(req.query), userId };
  const contacts = await getAllContacts({
    page,
    perPage,
    sortBy,
    sortOrder,
    filter,
  });
  res.status(200).json({
    status: 200,
    message: 'Successfully fetch contacts!',
    data: contacts,
  });
};

export const getContactByIdController = async (req, res, next) => {
  const { _id: userId } = req.user;
  const { contactId } = req.params;

  const contact = await getContactById(contactId, userId);
  if (!contact) {
    return next(createHttpError(404, 'Contact not found!'));
  }
  res.status(200).json({
    status: 200,
    message: `Successfully fetch contact with id ${contactId}!`,
    data: contact,
  });
};

export const createContactController = async (req, res) => {
  const { _id: userId } = req.user;
  const newContact = { ...req.body, userId };

  const contact = await createContact(newContact);

  res.status(201).json({
    status: 201,
    message: 'Successfully created contact!',
    data: contact,
  });
};

export const changeContactFavouriteController = async (req, res, next) => {
  const { contactId } = req.params;
  const { _id: userId } = req.user;

  const updatedContact = await changeContactFavourite(
    contactId,
    userId,
    req.body,
  );
  if (!updatedContact) {
    return next(createHttpError(404, 'Contact not found!'));
  }
  res.json({
    status: 200,
    message: 'Successfully patched a contact!',
    data: updatedContact,
  });
};

export const deleteContactController = async (req, res, next) => {
  const { contactId } = req.params;
  const { _id: userId } = req.user;

  const deletedContact = await deleteContact(contactId, userId);
  if (!deletedContact) {
    return next(createHttpError(404, 'Contact not found!'));
  }

  res.status(204).send();
};

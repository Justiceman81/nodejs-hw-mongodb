import express from 'express';

import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import {
  getAllContacts,
  getContactById,
  deleteContact,
  createContact,
  changeContactFavourite,
} from '../services/contacts.js';

const router = express.Router();
const jsonParser = express.json({ type: 'application / json' });

router.get('/contacts', ctrlWrapper(getAllContacts));
router.get('/contacts/:contactId', ctrlWrapper(getContactById));
router.post('/contacts', jsonParser, ctrlWrapper(createContact));
router.patch(
  '/contacts/:contactId',
  jsonParser,
  ctrlWrapper(changeContactFavourite),
);
router.delete('/contacts/:contactId', ctrlWrapper(deleteContact));

export default router;

import express from 'express';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import {
  getAllContactsController,
  getContactByIdController,
  deleteContactController,
  createContactController,
  changeContactFavouriteController,
} from '../controllers/contacts.js';

const router = express.Router();
const jsonParser = express.json({ type: 'application/json' });

router.get('/contacts', ctrlWrapper(getAllContactsController));
router.get('/contacts/:contactId', ctrlWrapper(getContactByIdController));
router.post('/contacts', jsonParser, ctrlWrapper(createContactController));
router.patch(
  '/contacts/:contactId',
  jsonParser,
  ctrlWrapper(changeContactFavouriteController),
);
router.delete('/contacts/:contactId', ctrlWrapper(deleteContactController));

export default router;

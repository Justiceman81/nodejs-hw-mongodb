import createHttpError from 'http-errors';
import { isValidObjectId } from 'mongoose';

export const isValidId = async (req, res, next) => {
  const { contactId } = req.params;
  if (!isValidObjectId(contactId)) {
    return next(createHttpError(400, 'Bad Request'));
  }
  next();
};

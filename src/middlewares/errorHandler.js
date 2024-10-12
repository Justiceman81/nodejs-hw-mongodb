import { HttpError } from 'http-errors';

export const errorHandler = (err, req, res, next) => {
  if (HttpError(err) === true) {
    return res
      .status(err.statusCode)
      .json({ status: err.statusCode, message: err.message });
  }

  console.error(err);

  res.status(500).send({ status: 500, message: 'Internal Server Error' });
};

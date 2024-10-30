import Joi from 'joi';

export const createContactSchema = Joi.object({
  name: Joi.string().min(3).max(20).required(),
  email: Joi.string().email().min(3).max(30).required(),
  phoneNumber: Joi.string()
    .pattern(/^[0-9]{3}-[0-9]{3}-[0-9]{2}-[0-9]{2}$/)
    .required(),
  contactType: Joi.string()
    .valid('personal', 'work', 'home')
    .default('personal'),
  isFavourite: Joi.boolean().default(false),
});

export const updateContactSchema = Joi.object({
  name: Joi.string().min(3).max(20),
  email: Joi.string().email().min(3).max(30),
  phoneNumber: Joi.string().pattern(/^[0-9]{3}-[0-9]{3}-[0-9]{2}-[0-9]{2}$/),
  contactType: Joi.string()
    .valid('personal', 'work', 'home')
    .default('personal'),
  isFavourite: Joi.boolean().default(false),
});

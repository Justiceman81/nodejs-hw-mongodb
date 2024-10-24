import Joi from 'joi';

export const registerUserSchema = Joi.object({
  name: Joi.string().min(2).max(20).required(),
  email: Joi.string().email().min(2).max(30).required(),
  password: Joi.string().min(6).max(20).required(),
});

export const loginUserSchema = Joi.object({
  email: Joi.string().email().min(2).max(30).required(),
  password: Joi.string().min(6).max(20).required(),
});

export const requestResetEmailSchema = Joi.object({
  email: Joi.string().email().min(2).max(30).required(),
});

export const resetPasswordSchema = Joi.object({
  password: Joi.string().min(6).max(20).required(),
  token: Joi.string().required(),
});

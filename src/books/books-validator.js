const Joi = require('joi');
const { genres } = require('../constants');

exports.loadBookByIdValidator = Joi.object().keys({
    id: Joi.string()
}).unknown(false);

exports.createBookValidator = Joi.object().keys({
    title: Joi.string().min(3),
    description: Joi.string().min(3),
    isbn: Joi.string().min(10),
    author: Joi.string().min(3),
    genre: Joi.string().valid(genres),
    publicationDate: Joi.date().iso(),
    price: Joi.number().min(0)
}).unknown(false);

exports.deleteBookValidator = Joi.object().keys({
    id: Joi.string()
}).unknown(false);
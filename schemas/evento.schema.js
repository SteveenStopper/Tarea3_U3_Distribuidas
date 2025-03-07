const Joi = require('joi');

const id = Joi.number().integer();
const name = Joi.string().max(100).required();
const description = Joi.string().max(255).required();
const date = Joi.date().required();
const capacity = Joi.number().integer().required();
const createdAt = Joi.date();
const updatedAt = Joi.date();

const createEventoSchema = Joi.object({
    name,
    description,
    date,
    capacity,
    createdAt,
    updatedAt
});

const updateEventoSchema = Joi.object({
    name,
    description,
    date,
    capacity,
    createdAt,
    updatedAt
});

const getEventoSchema = Joi.object({
    id: id.required()
});

module.exports = { createEventoSchema, updateEventoSchema, getEventoSchema };
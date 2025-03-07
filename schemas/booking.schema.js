const Joi = require('joi');

const id = Joi.number().integer();
const eventId = Joi.number().integer().required();
const user_email = Joi.string().email().required();
const num_tickets = Joi.number().integer().required();
const createdAt = Joi.date();
const updatedAt = Joi.date();

const createBookingSchema = Joi.object({
    eventId,
    user_email,
    num_tickets,
    createdAt,
    updatedAt
});

const updateBookingSchema = Joi.object({
    eventId,
    user_email,
    num_tickets,
    createdAt,
    updatedAt
});

const getBookingSchema = Joi.object({
    id: id.required()
});

module.exports = { createBookingSchema, updateBookingSchema, getBookingSchema };
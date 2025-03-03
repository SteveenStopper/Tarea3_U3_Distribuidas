const Joi = require('joi');

const id = Joi.number().integer();
const nombre = Joi.string().min(3).max(50);
const fecha = Joi.date();
const lugar = Joi.string().min(3).max(50);

const createEventoSchema = Joi.object({
    nombre: nombre.required(),
    fecha: fecha.required(),
    lugar: lugar.required()
});

const updateEventoSchema = Joi.object({
    nombre: nombre,
    fecha: fecha,
    lugar: lugar
});

const getEventoSchema = Joi.object({
    id: id.required()
});

module.exports = { createEventoSchema, updateEventoSchema, getEventoSchema };
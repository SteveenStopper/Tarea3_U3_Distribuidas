const Joi = require('joi');

const id = Joi.number().integer();
const eventoId = Joi.number().integer().required();
const asistenteId = Joi.number().integer().required();
const fecha_reserva = Joi.date().required();

const createReservaSchema = Joi.object({
    eventoId,
    asistenteId,
    fecha_reserva
});

const updateReservaSchema = Joi.object({
    eventoId,
    asistenteId,
    fecha_reserva
});

const getReservaSchema = Joi.object({
    id: id.required()
});

module.exports = { createReservaSchema, updateReservaSchema, getReservaSchema };
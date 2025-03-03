const Joi = require('joi');

const id = Joi.number().integer();
const nombre = Joi.string().min(3).max(50);
const email = Joi.string().email();

const createAsistenteSchema = Joi.object({
    nombre: nombre.required(),
    email: email.required()
});

const updateAsistenteSchema = Joi.object({
    nombre: nombre,
    email: email
});

const getAsistenteSchema = Joi.object({
    id: id.required()
});

module.exports = { createAsistenteSchema, updateAsistenteSchema, getAsistenteSchema };
const express = require('express');
const AsistenteService = require('../services/asistente.service');
const validatorHandler = require('../middlewares/validator.handler');
const { createAsistenteSchema, updateAsistenteSchema, getAsistenteSchema } = require('../schemas/asistente.schema');

const router = express.Router();
const service = new AsistenteService();

router.get('/', async (req, res, next) => {
    try {
        const asistentes = await service.find();
        res.json(asistentes);
    } catch (error) {
        next(error);
    }
});

router.get('/:id', validatorHandler(getAsistenteSchema, 'params'), async (req, res, next) => {
    try {
        const { id } = req.params;
        const asistente = await service.findOne(id);
        res.json(asistente);
    } catch (error) {
        next(error);
    }
});

router.post('/', validatorHandler(createAsistenteSchema, 'body'), async (req, res, next) => {
    try {
        const body = req.body;
        const newAsistente = await service.create(body);
        res.status(201).json(newAsistente);
    } catch (error) {
        next(error);
    }
});

router.patch('/:id', validatorHandler(getAsistenteSchema, 'params'), validatorHandler(updateAsistenteSchema, 'body'), async (req, res, next) => {
    try {
        const { id } = req.params;
        const body = req.body;
        const asistente = await service.update(id, body);
        res.json(asistente);
    } catch (error) {
        next(error);
    }
});

router.delete('/:id', validatorHandler(getAsistenteSchema, 'params'), async (req, res, next) => {
    try {
        const { id } = req.params;
        const asistente = await service.delete(id);
        res.json(asistente);
    } catch (error) {
        next(error);
    }
});

module.exports = router;
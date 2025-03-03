const express = require('express');
const ReservaService = require('../services/reserva.service');
const validatorHandler = require('../middlewares/validator.handler');
const { createReservaSchema, updateReservaSchema, getReservaSchema } = require('../schemas/reserva.schema');

const router = express.Router();
const service = new ReservaService();

router.get('/', async (req, res, next) => {
    try {
        const reservas = await service.find();
        res.json(reservas);
    } catch (error) {
        next(error);
    }
});

router.get('/:id', validatorHandler(getReservaSchema, 'params'), async (req, res, next) => {
    try {
        const { id } = req.params;
        const reserva = await service.findOne(id);
        res.json(reserva);
    } catch (error) {
        next(error);
    }
});

router.post('/', validatorHandler(createReservaSchema, 'body'), async (req, res, next) => {
    try {
        const body = req.body;
        const newReserva = await service.create(body);
        res.status(201).json(newReserva);
    } catch (error) {
        next(error);
    }
});

router.patch('/:id', validatorHandler(getReservaSchema, 'params'), validatorHandler(updateReservaSchema, 'body'), async (req, res, next) => {
    try {
        const { id } = req.params;
        const body = req.body;
        const reserva = await service.update(id, body);
        res.json(reserva);
    } catch (error) {
        next(error);
    }
});

router.delete('/:id', validatorHandler(getReservaSchema, 'params'), async (req, res, next) => {
    try {
        const { id } = req.params;
        const reserva = await service.delete(id);
        res.json(reserva);
    } catch (error) {
        next(error);
    }
});

module.exports = router;
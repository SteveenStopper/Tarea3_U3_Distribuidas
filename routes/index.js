const express = require('express');
const eventoRouter = require('./evento.router');
const asistenteRouter = require('./asistente.router');
const reservaRouter = require('./reserva.router');

function routerApi(app){
    const router = express.Router();
    app.use('/api/v2', router);

    router.use('/evento', eventoRouter);
    router.use('/asistente', asistenteRouter);
    router.use('/reserva', reservaRouter);
}

module.exports = routerApi;
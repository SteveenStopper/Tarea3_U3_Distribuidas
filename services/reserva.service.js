const boom = require('boom');
const { models } = require('./../libs/sequelize');

class ReservaService {
    constructor(){}

    async create(data){
        try {
            return await models.Reserva.create(data);
        } catch (error) {
            throw boom.boomify(error);
        }
    }

    async find(){
        try {
            return await models.Reserva.findAll({
                include: [
                    {
                        model: models.Evento,
                        as: 'evento'
                    },
                    {
                        model: models.Asistente,
                        as: 'asistente'
                    }
                ]
            });
        } catch (error) {
            throw boom.boomify(error);
        }
    };

    async findOne(id){
        try {
            return await models.Reserva.findByPk(id, {
                include: [
                    {
                        model: models.Evento,
                        as: 'evento'
                    },
                    {
                        model: models.Asistente,
                        as: 'asistente'
                    }
                ]
            });
        } catch (error) {
            throw boom.boomify(error);
        }
    };

    async update(id, changes){
        try {
            const reserva = await models.Reserva.findByPk(id);
            return await reserva.update(changes);
        } catch (error) {
            throw boom.boomify(error);
        }
    };

    async delete(id){
        try {
            const reserva = await models.Reserva.findByPk(id);
            return await reserva.destroy();
        } catch (error) {
            throw boom.boomify(error);
        }
    };
};

module.exports = ReservaService;
const boom = require('boom');
const { models } = require('./../libs/sequelize');

class EventoService {
    constructor(){}

    async create(data){
        try {
            return await models.Evento.create(data);
        } catch (error) {
            throw boom.boomify(error);
        }
    }

    async find(){
        try {
            return await models.Evento.findAll({
                include: [
                    {
                        model: models.Asistente,
                        as: 'asistentes',
                        through: { attributes: ['fecha_reserva'] }
                    }
                ]
            });
        } catch (error) {
            throw boom.boomify(error);
        }
    };

    async findOne(id){
        try {
            return await models.Evento.findByPk(id, {
                include: [
                    {
                        model: models.Asistente,
                        as: 'asistentes',
                        through: { attributes: ['fecha_reserva'] }
                    }
                ]
            });
        } catch (error) {
            throw boom.boomify(error);
        }
    };

    async update(id, changes){
        try {
            const evento = await models.Evento.findByPk(id);
            return await evento.update(changes);
        } catch (error) {
            throw boom.boomify(error);
        }
    };

    async delete(id){
        try {
            const evento = await models.Evento.findByPk(id);
            return await evento.destroy();
        } catch (error) {
            throw boom.boomify(error);
        }
    };
};

module.exports = EventoService;
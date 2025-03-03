const boom = require('boom');
const { models } = require('./../libs/sequelize');

class AsistenteService {
    constructor(){}

    async create(data){
        try {
            return await models.Asistente.create(data);
        } catch (error) {
            throw boom.boomify(error);
        }
    }

    async find(){
        try {
            return await models.Asistente.findAll({
                include: [
                    {
                        model: models.Evento,
                        as: 'eventos',
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
            return await models.Asistente.findByPk(id, {
                include: [
                    {
                        model: models.Evento,
                        as: 'eventos',
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
            const asistente = await models.Asistente.findByPk(id);
            return await asistente.update(changes);
        } catch (error) {
            throw boom.boomify(error);
        }
    };

    async delete(id){
        try {
            const asistente = await models.Asistente.findByPk(id);
            return await asistente.destroy();
        } catch (error) {
            throw boom.boomify(error);
        }
    };
};

module.exports = AsistenteService;
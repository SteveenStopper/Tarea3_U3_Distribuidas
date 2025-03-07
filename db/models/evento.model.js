const { date } = require('joi');
const { Model, DataTypes } = require('sequelize');
const Evento_Table = 'evento';

const EventoSchema = {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    capacity: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false
    },
    updatedAt: {
        type: DataTypes.DATE,
        allowNull: false
    }
};

class Evento extends Model {
    static associate(models) {
        this.belongsToMany(models.Asistente, {
            through: models.Reserva,
            foreignKey: 'eventoId',
            otherKey: 'asistenteId',
            as: 'asistentes'
        });
    }
    static config(sequelize) {
        return {
            sequelize,
            tableName: Evento_Table,
            modelName: 'Evento',
            timestamps: false
        }
    }
}

module.exports = { Evento, EventoSchema, Evento_Table };
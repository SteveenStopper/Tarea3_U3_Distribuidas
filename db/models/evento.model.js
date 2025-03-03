const { Model, DataTypes } = require('sequelize');
const Evento_Table = 'evento';

const EventoSchema = {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    fecha: {
        type: DataTypes.DATE,
        allowNull: false
    },
    lugar: {
        type: DataTypes.STRING,
        allowNull: false
    },
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
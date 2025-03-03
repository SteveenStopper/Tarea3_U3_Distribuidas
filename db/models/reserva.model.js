const { Model, DataTypes } = require('sequelize');
const Reserva_Table = 'reserva';

const ReservaSchema = {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    asistenteId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'asistente',
            key: 'id'
        }
    },
    eventoId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'evento',
            key: 'id'
        }
    },
    fecha_reserva: {
        type: DataTypes.DATE,
        allowNull: false
    }
};

class Reserva extends Model {
    static associate(models) {
        this.belongsTo(models.Asistente, {
            foreignKey: 'asistenteId',
            as: 'asistente'
        });
        this.belongsTo(models.Evento, {
            foreignKey: 'eventoId',
            as: 'evento'
        });
    }
    static config(sequelize) {
        return {
            sequelize,
            tableName: Reserva_Table,
            modelName: 'Reserva',
            timestamps: false
        }
    }
}

module.exports = { Reserva, ReservaSchema, Reserva_Table };
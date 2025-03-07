const { Model, DataTypes } = require('sequelize');
const { Evento } = require('./evento.model');
const Booking_Table = 'booking';

const BookingSchema = {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    eventId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'evento',
            key: 'id'
        }
    },
    user_email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    num_tickets: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    },
    updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    }
};

class Booking extends Model {
    static associate(models) {
        this.belongsTo(models.Evento, {
            foreignKey: 'eventId',
            as: 'evento'
        });
    }
    static config(sequelize) {
        return {
            sequelize,
            tableName: Booking_Table,
            modelName: 'Booking',
            timestamps: false
        }
    }
}

module.exports = { Booking, BookingSchema, Booking_Table };
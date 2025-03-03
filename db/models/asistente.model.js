const { Model, DataTypes } = require('sequelize');
const Asistente_Table = 'asistente';

const AsistenteSchema = {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
};

class Asistente extends Model {
    static associate(models) {
        this.belongsToMany(models.Evento, {
            through: models.Reserva,
            foreignKey: 'asistenteId',
            otherKey: 'eventoId',
            as: 'eventos'
        });
    }
    static config(sequelize) {
        return {
            sequelize,
            tableName: Asistente_Table,
            modelName: 'Asistente',
            timestamps: false
        }
    }
}

module.exports = { Asistente, AsistenteSchema, Asistente_Table };
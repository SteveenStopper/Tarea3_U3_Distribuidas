const { Evento, EventoSchema } = require('./evento.model');
const { Asistente, AsistenteSchema } = require('./asistente.model');
const { Reserva, ReservaSchema } = require('./reserva.model');
const { Booking, BookingSchema } = require('./booking.model');

function initModels(sequelize) {
    Evento.init(EventoSchema, Evento.config(sequelize));
    Asistente.init(AsistenteSchema, Asistente.config(sequelize));
    Reserva.init(ReservaSchema, Reserva.config(sequelize));
    Booking.init(BookingSchema, Booking.config(sequelize));

    Evento.associate(sequelize.models);
    Asistente.associate(sequelize.models);
    Reserva.associate(sequelize.models);
    Booking.associate(sequelize.models);
}

module.exports = initModels;
'use strict';
const { Evento_Table, EventoSchema } = require('../models/evento.model');
const { Booking_Table, BookingSchema } = require('../models/booking.model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
     await queryInterface.createTable(Evento_Table, EventoSchema);
      await queryInterface.createTable(Booking_Table, BookingSchema);
  },

  async down (queryInterface) {
    await queryInterface.dropTable(Evento_Table);
    await queryInterface.dropTable(Booking_Table);
  }
};

'use strict';
const { Reserva_Table, ReservaSchema } = require('../models/reserva.model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.createTable(Reserva_Table, ReservaSchema);
  },

  async down (queryInterface) {
    await queryInterface.dropTable(Reserva_Table);
  }
};

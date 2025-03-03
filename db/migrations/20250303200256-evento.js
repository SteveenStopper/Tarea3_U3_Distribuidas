'use strict';
const { Evento_Table, EventoSchema } = require('../models/evento.model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
     await queryInterface.createTable(Evento_Table, EventoSchema);
  },

  async down (queryInterface) {
    await queryInterface.dropTable(Evento_Table);
  }
};

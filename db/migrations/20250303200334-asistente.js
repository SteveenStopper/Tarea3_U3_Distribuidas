'use strict';
const { Asistente_Table, AsistenteSchema } = require('../models/asistente.model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.createTable(Asistente_Table, AsistenteSchema);
  },

  async down (queryInterface) {
    await queryInterface.dropTable(Asistente_Table);
  }
};

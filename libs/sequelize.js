const { Sequelize } = require('sequelize');
const config = require('./../config/config');
const initModels = require('./../db/models');

const env = process.env.NODE_ENV || 'development';
const dbConfig = config[env];

const USER = encodeURIComponent(dbConfig.username);
const PASS = encodeURIComponent(dbConfig.password);
const URI = `postgres://${USER}:${PASS}@${dbConfig.host}:${dbConfig.port}/${dbConfig.database}`;

const sequelize = new Sequelize(URI, {
  dialect: 'postgres',
  logging: (msg) => console.log(msg),
});

initModels(sequelize);
/* sequelize.sync(); */

module.exports = sequelize;
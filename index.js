const express = require('express');
const routerApi = require('./routes');
const { logErrors, errorHandler, boomErrorHandler } = require('./middlewares/error.handler');
const initModels = require('./db/models');
const sequelize = require('./libs/sequelize');

const app = express();
const port = 3000;

app.use(express.json());

initModels(sequelize);
routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
    console.log('Mi puerto ' + port);
});
const express = require('express');
const bodyParser = require('body-parser');
const router = require('./router');
const connectToMongo = require('./db');
const requestLogger = require('./middleware/request-logger');

const app = express();

if(process.env.NODE_ENV !== 'test') {
    connectToMongo();
}

app.use(bodyParser.json({ type: '*/*' }));
app.use(requestLogger);

router(app);

module.exports = app;
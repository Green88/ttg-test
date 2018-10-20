const mongoose = require('mongoose');
const { mongo } = require('./config');
const logger = require('./utils/logger');


mongoose.Promise = global.Promise;

const mongoConfig = {
    config: {
        autoIndex: false
    },
    useNewUrlParser: true
};

function connect() {
    mongoose.connect(mongo.URL, mongoConfig);

    mongoose.connection.on('connected', function () {
        logger.info('Mongoose default connection open');
    });

    mongoose.connection.on('error',function (err) {
        logger.error('Mongoose default connection error: ' + err);
    });

    mongoose.connection.on('disconnected', function () {
        logger.info('Mongoose default connection disconnected');
    });

    process.on('SIGINT', function() {
        mongoose.connection.close(function () {
            logger.info('Mongoose default connection disconnected through app termination');
            process.exit(0);
        });
    });
}

module.exports = connect;
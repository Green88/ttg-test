const Joi = require('joi');

module.exports = (obj, schema) => {
    const { error, value } = Joi.validate(obj, schema);
    if (error) {
        return false;
    }
    return value;
};
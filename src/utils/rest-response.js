exports.ok = (res, payload) => {
    res.json(payload);
};

exports.badRequest = (res, message) => {
    res.status(400)
        .json({ message })
};

exports.serverError = (res, error) => {
    res.status(500)
        .json({
            message: error ? error.message : 'Internal server error'
        })
};
const mongo = {
    URL: process.env.MONGO_URL || 'mongodb://localhost:27017/books_local'
};

exports.mongo = mongo;
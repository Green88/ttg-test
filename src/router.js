const booksRoutes = require('./books/books-routes');

module.exports = (app) => {
    booksRoutes(app);
};
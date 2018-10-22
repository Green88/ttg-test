const Book = require('./books-model');
const { loadBookByIdValidator, createBookValidator, deleteBookValidator } = require('./books-validator');
const validateRequest = require('../utils/request-validator');
const restResponse = require('../utils/rest-response');

module.exports = (app) => {
    app.get('/api/books', loadBooks);
    app.get('/api/books/:id', loadBooksById);
    app.post('/api/books', createBook);
    app.delete('/api/books/:id', deleteBook);
};

const loadBooks = async (req, res) => {
    let book;
    try {
        book = await Book.find({});
    } catch (err) {
        restResponse.serverError(res, err);
        return;
    }

    restResponse.ok(res, book);
};

const loadBooksById = async (req, res) => {
    const params = req.params;
    if (!validateRequest(params, loadBookByIdValidator)) {
        restResponse.badRequest(res, 'Bad request params');
        return;
    }
    let book;
    try {
        book = await Book.findOne({_id: req.params.id});
    } catch (err) {
        restResponse.serverError(res, err);
        return;
    }
    restResponse.ok(res, book);
};

const createBook = async (req, res) => {
    const bookParams = req.body;

    if (!validateRequest(bookParams, createBookValidator)) {
        restResponse.badRequest(res, 'Bad request params');
        return;
    }
    const book = new Book(bookParams);

    let saved;
    try {
        saved = await book.save();
    } catch (err) {
        restResponse.serverError(res, err);
        return;
    }

    restResponse.ok(res, saved);
};

const deleteBook = async (req, res) => {
    const { params } = req;
    if (!validateRequest(params, deleteBookValidator)) {
        restResponse.badRequest(res, 'Bad request params');
        return;
    }
    let deleted;
    try {
        deleted = await Book.findOneAndDelete({ _id: params.id });
    } catch(err) {
        restResponse.serverError(res, err);
        return;
    }

    restResponse.ok(res, deleted);
};
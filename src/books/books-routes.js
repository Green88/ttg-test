const Book = require('./books-model');
const { loadBookByIdValidator, createBookValidator, deleteBookValidator } = require('./books-validator');
const validateRequest = require('../utils/request-validator');

module.exports = (app) => {
    app.get('/api/books', loadBooks);
    app.get('/api/books/:id', loadBooksById);
    app.post('/api/books', createBook);
    app.delete('/api/books/:id', deleteBook);
};

const loadBooks = async (req, res) => {
    const book = await Book.find({});
    res.json(book);
};

const loadBooksById = async (req, res) => {
    const params = req.params;
    if (!validateRequest(params, loadBookByIdValidator)) {
        res.status(400).json({
            message: 'Bad request params'
        });
        return;
    }
    const book = await Book.findOne({_id: req.params.id});
    res.json(book)
};

const createBook = async (req, res) => {
    const bookParams = req.body;

    if (!validateRequest(bookParams, createBookValidator)) {
        res.status(400).json({
            message: 'Bad request params'
        });
        return;
    }
    const book = new Book(bookParams);

    const saved = await book.save();
    res.json(saved);
};

const deleteBook = async (req, res) => {
    const params = req.params;
    if (!validateRequest(params, deleteBookValidator)) {
        res.status(400).json({
            message: 'Bad request params'
        });
        return;
    }
    const deleted = await Book.findOneAndDelete({ _id: req.params.id });
    res.json(deleted);
};
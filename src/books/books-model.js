const mongoose = require('mongoose');

const bookSchema = mongoose.Schema({
    title: String,
    description: String,
    isbn: String,
    author: String,
    genre: String,
    publicationDate: Date,
    price: Number
});

const Book = mongoose.model('book', bookSchema);

module.exports = Book;
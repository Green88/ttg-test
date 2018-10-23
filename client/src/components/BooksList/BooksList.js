import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import map from 'lodash/map';
import { fetchBooks, deleteBook } from '../../actions';
import './BooksList.css';

class BooksList extends Component {
    componentDidMount() {
        this.props.fetchBooks();
    }

    handleDeleteBook(id) {
        this.props.deleteBook(id);
    }
    renderBooks() {
        return map(this.props.books, book => (
            <div key={book._id} className="book-card">
                <div className="col s12 m6">
                    <div className="card blue-grey darken-1">
                        <div className="card-content white-text">
                            <span className="card-title">{`${book.title} by ${book.author}`}</span>
                            <p>{book.description}</p>
                            <p>Price: {`$ ${book.price}`}</p>
                        </div>
                        <div className="card-action">
                            <Link to={`/books/${book._id}`}>More details</Link>
                            <button className="waves-effect waves-light red" onClick={()=>this.handleDeleteBook(book._id)}>
                                Delete book
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        ))
    }

    render() {
        return (
            <div>
                <div className="books-list">{this.renderBooks()}</div>
                <Link to="/books/new" className="btn-floating btn-large waves-effect waves-light red button-add">
                    <i className="material-icons">add</i>
                </Link>
            </div>
        );
    }
}

function mapStateToProps({ books }) {
    return { books };
}

export default connect(mapStateToProps, { fetchBooks, deleteBook })(BooksList);
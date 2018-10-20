import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchBook } from '../../actions';

class Book extends Component {
    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.fetchBook(id);
    }
    renderBook() {
        if (!this.props.book) {
            return <h2>Loading</h2>;
        }

        const { book } = this.props;

        return (
            <div>
                <div className="card grey darken-1">
                    <div className="card-content white-text">
                        <span className="card-title">{`${book.title} by ${book.author}`}</span>
                        <p>{book.description}</p>
                        <p>{`Of genre: ${book.genre}`}</p>
                        <p>{`ISBN number: ${book.isbn}`}</p>
                        <p>{`Price: $ ${book.price}`}</p>
                        <p>{`Published at: ${book.publicationDate}`}</p>
                    </div>
                    <div className="card-action">
                        <Link to="/">Back to inventory</Link>
                    </div>
                </div>
            </div>
        );
    }
    render() {
        return (
            <div>{this.renderBook()}</div>
        );
    }
}

function mapStateToProps({ books }, ownProps) {
    return { book: books[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchBook })(Book);
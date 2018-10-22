import React, { Component } from 'react';
import { reduxForm, Field} from 'redux-form';
import { Link } from 'react-router-dom';
import map from 'lodash/map';
import moment from 'moment';
import { connect } from "react-redux";
import { createBook } from "../../actions";
import formInputFields from './formInputFields';
import BookInputField from './BookInputField';
import BookSelectField from './BookSelectField';
import BookDatepicker from './BookDatepicker';
import formValidation from './formValidation';
import { genres } from '../../constants';
import './BooksNew.css';

const dateFormat = 'DD/MM/YYYY';

class BookNew extends Component {
    constructor (props) {
        super(props);
        this.state = {
            startDate: moment().format(dateFormat)
        };
        this.handleChange = this.handleChange.bind(this);
    }
    onBookSubmit = (values) => {
        const book = {
            ...values,
            publicationDate: moment(values.publicationDate).toISOString(),
            genre: genres[values.genre]
        };
        this.props.createBook(book, () => {
            this.props.history.push('/');
        });
    };

    handleChange(date) {
        this.setState({
            startDate: moment(date).format(dateFormat)
        });
    }
    renderInputFields() {
        return map(formInputFields, ({ label, name }) => {
            return (
                <Field
                    key={name}
                    component={BookInputField}
                    type="text"
                    label={label}
                    name={name}
                />
            );
        });
    }
    renderForm() {
        return (
            <div>
                {this.renderInputFields()}
                <Field name="genre" component={BookSelectField} label="Genre"/>
                <Field
                    name="publicationDate"
                    component={BookDatepicker}
                    label="Publication Date"
                    dateFormat={dateFormat}
                    selected={this.state.startDate}
                    onChange={this.handleChange}
                />
                <Link to="/" className="red btn-flat white-text">
                    Cancel
                </Link>
                <button type="submit" className="teal btn-flat white-text">
                    Add book
                    <i className="material-icons right">done</i>
                </button>
            </div>
        );
    }
    render() {
        return (
            <div>
                <h6>Add a book to inventory</h6>
                <form autoComplete="off" className="bookForm" onSubmit={this.props.handleSubmit(this.onBookSubmit)}>
                    {this.renderForm()}
                </form>
            </div>
    );
    }
}

export default reduxForm({
    form: 'bookNew',
    validate: formValidation
})(connect(null, { createBook })(BookNew));
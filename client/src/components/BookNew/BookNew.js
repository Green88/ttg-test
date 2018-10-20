import React, { Component } from 'react';
import { reduxForm, Field} from 'redux-form';
import { Link } from 'react-router-dom';
import map from 'lodash/map';
import moment from 'moment';
import formInputFields from './formInputFields';
import BookInputField from './BookInputField';
import BookSelectField from './BookSelectField';
import BookDatepicker from './BookDatepicker';
import formValidation from './formValidation';
import './BooksNew.css';

class BookNew extends Component {
    constructor (props) {
        super(props);
        this.state = {
            startDate: moment()
        };
        this.handleChange = this.handleChange.bind(this);
    }
    onBookSubmit(values) {
        console.log(values);
    }
    handleChange(date) {
        this.setState({
            startDate: date
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
            <form autocomplete="off" className="bookForm" onSubmit={this.props.handleSubmit(this.onBookSubmit)}>
                {this.renderForm()}
            </form>
    );
    }
}

export default reduxForm({
    form: 'bookNew',
    validate: formValidation
})(BookNew);
import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import booksReducer from './booksReducer';

export default combineReducers({
    books: booksReducer,
    form: reduxForm
});

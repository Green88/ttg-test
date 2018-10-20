import each from 'lodash/each';
import formInputFields from './formInputFields';

export default (values) => {
    const errors = {};

    each(formInputFields, ({ name }) => {
        if (!values[name]) {
            errors[name] = 'You must provide a value';
        }
    });

    if (!values.publicationDate) {
        errors.publicationDate = 'You must pick a date';
    }

    return errors;
}
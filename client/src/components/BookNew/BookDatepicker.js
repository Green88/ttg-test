import React from 'react';
import moment from 'moment';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

export default ({ input, label, dateFormat, meta: { error, touched } }) => {
    return (
        <div>
            <div>
                <label>{label}</label>
                <DatePicker
                    {...input}
                    autocomplete="false"
                    dateFormat={dateFormat}
                    selected={input.value ? moment(input.value) : null}
                    onChange={input.onChange}
                />
                <div className="red-text" style={{ marginBottom: '20px' }}>
                    {touched && error && <span>{error}</span>}
                </div>
            </div>
        </div>
    );
};



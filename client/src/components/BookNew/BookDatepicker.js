import React from 'react';
// import moment from 'moment';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

export default ({ input, label, meta: { error, touched } }) => {
    return (
        <div>
            <div>
                <label>{label}</label>
                <DatePicker {...input} autocomplete="false" dateForm="DD/MM/YYYY" selected={input.value ? input.value : null} />
                <div className="red-text" style={{ marginBottom: '20px' }}>
                    {touched && error && <span>{error}</span>}
                </div>
            </div>
        </div>
    );
};



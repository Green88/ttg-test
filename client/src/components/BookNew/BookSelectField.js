import React from 'react';
import map from 'lodash/map';
import { genres } from '../../constants';

export default ({ input, label, meta: { error, touched } }) => {
    return (
        <div>
            <label>{label}</label>
            <div>
                <select {...input} style={{ display: 'block', marginBottom: '20px' }}>
                    <option />
                    {map(genres, (value, key) => (
                        <option key={key} value={key}>{value}</option>
                    ))}
                </select>
            </div>
            <div className="red-text" style={{ marginBottom: '20px' }}>
                {touched && error}
            </div>
        </div>
    );
}
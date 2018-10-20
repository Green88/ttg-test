import React from 'react';
import map from 'lodash/map';

const genres = {
    scifi: 'Science fiction',
    satire: 'Satire',
    drama: 'Drama',
    action: 'Action',
    romance: 'Romance',
    mystery: 'Mystery',
    horror: 'Horror'
};

export default ({ input, name, label, meta: { error, touched } }) => {
    return (
        <div>
            <label>{label}</label>
            <div>
                <select name={name} style={{ display: 'block', marginBottom: '20px' }}>
                    <option />
                    {map(genres, (value, key) => (
                        <option value={key}>{value}</option>
                    ))}
                </select>
            </div>
            <div className="red-text" style={{ marginBottom: '20px' }}>
                {touched && error}
            </div>
        </div>
    );
}
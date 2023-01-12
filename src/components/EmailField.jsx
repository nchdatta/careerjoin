import React from 'react';

const EmailField = ({ name, label, placeholder }) => {
    return (
        <div className='input-group'>
            <label htmlFor={name} className='input-label'>{label}</label>
            <input type="email" name={name} id={name} placeholder={placeholder || 'youremail@example.com'} className='input-field' />
        </div>
    );
};

export default EmailField;
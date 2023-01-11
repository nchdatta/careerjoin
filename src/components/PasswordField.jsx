import React from 'react';

const PasswordField = ({ name, label, placeholder, autoFocus }) => {
    return (
        <div className='input-group'>
            <label htmlFor={name} className='input-label'>{label}</label>
            <input type="password" name={name} id={name} placeholder={placeholder || 'Password***'} autoFocus={autoFocus} className='input-field' />
        </div>
    );
};

export default PasswordField;
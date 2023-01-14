import React from 'react';

const PasswordField = ({ name, label, placeholder, autoFocus, required }) => {
    return (
        <div className='input-group'>
            <label htmlFor={name} className='input-label'>{label} <span className='required'>{required && '*'}</span></label>
            <input type="password" name={name} id={name} placeholder={placeholder || 'Password***'} autoFocus={autoFocus} className='input-field' required={required} />
        </div>
    );
};

export default PasswordField;
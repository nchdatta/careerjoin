import React from 'react';

const EmailField = ({ name, label, placeholder, required, register }) => {
    return (
        <div className='input-group'>
            <label htmlFor={name} className='input-label'>{label} <span className='required'>{required && '*'}</span></label>
            <input type="email" name={name} id={name} {...register(name)} placeholder={placeholder || 'youremail@example.com'} className='input-field' required={required} />
        </div>
    );
};

export default EmailField;
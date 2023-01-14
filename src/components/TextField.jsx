import React from 'react';

const TextField = ({ name, label, placeholder, register, required }) => {
    return (
        <div className='input-group'>
            <label htmlFor={name} className='input-label'>{label} <span className='required'>{required && '*'}</span></label>
            <input type="text" name={name} id={name} {...register(name)} placeholder={placeholder || 'Enter your text'} className='input-field' required={required} />
        </div>
    );
};

export default TextField;
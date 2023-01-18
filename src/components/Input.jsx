import React from 'react';

const Input = ({ type = 'text', name, label, placeholder = 'Placeholder text', required, register, value, readonly }) => {
    return (
        <div className='input-group'>
            <label htmlFor={name} className='input-label'>{label} <span className='required'>{required && '*'}</span></label>
            <input type={type} name={name} id={name} {...register(name)} defaultValue={value} placeholder={placeholder} className='input-field' required={required} readOnly={readonly} />
        </div>
    );
};

export default Input;
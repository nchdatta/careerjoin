import React from 'react';

const TextField = ({ name, label, placeholder }) => {
    return (
        <div className='input-group'>
            <label htmlFor={name} className='input-label'>{label}</label>
            <input type="text" name={name} id={name} placeholder={placeholder || 'Enter your text'} className='input-field' />
        </div>
    );
};

export default TextField;
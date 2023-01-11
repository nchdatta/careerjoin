import React from 'react';

const TextField = ({ name, label, placeholder }) => {
    return (
        <div>
            <label htmlFor={name}>{label}</label>
            <input type="text" name={name} id={name} placeholder={placeholder || 'Enter your text'} />
        </div>
    );
};

export default TextField;
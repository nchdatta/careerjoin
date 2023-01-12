import React from 'react';

const RadioButton = ({ name, id, label, checked }) => {
    return (
        <div className="radio">
            <input type="radio" name={name} id={id} checked={checked} />
            <label htmlFor={id}>{label}</label>
        </div>
    );
};

export default RadioButton;
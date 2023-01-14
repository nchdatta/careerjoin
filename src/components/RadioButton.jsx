import React from 'react';

const RadioButton = ({ name, id, label, checked, register }) => {
    return (
        <div className="radio">
            <input type="radio" name={name} id={id} {...register(name)} defaultValue={label} defaultChecked={checked} />
            <label htmlFor={id}>{label}</label>
        </div>
    );
};

export default RadioButton;
import React from 'react';

const DropDown = ({ name, label, data, required, register }) => {
    return (
        <div className='input-group'>
            <label htmlFor={name} className='input-label'>{label} <span className='required'>{required && '*'}</span></label>
            <select name={name} id={name} {...register(name)} className='dropdown-field' required={required}>
                {data?.map((d, i) => <option key={i}>{d}</option>)}
            </select>
        </div>
    );
};

export default DropDown;
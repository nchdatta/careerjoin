import React from 'react';

const DropDown = ({ name, label, data }) => {
    console.log(data)
    return (
        <div className='input-group'>
            <label htmlFor={name} className='input-label'>{label}</label>
            <select name={name} id={name} className='input-field'>
                {data.map((d, i) => <option key={i}>{d}</option>)}
            </select>
        </div>
    );
};

export default DropDown;
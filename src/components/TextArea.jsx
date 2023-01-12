import React from 'react';

const TextArea = ({ name, label, required }) => {
    return (
        <div className='input-group'>
            <label htmlFor={name} className='input-label'>{label} <span className='required'>{required && '*'}</span></label>
            <textarea name={name} id={name} cols="30" rows="15" className='input-field' style={{ resize: 'none' }} required={required}></textarea>
        </div>
    );
};

export default TextArea;
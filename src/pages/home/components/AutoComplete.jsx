import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const AutoComplete = ({ label, id, placeholder, autoFocus, labelIcon }) => {
    return (
        <div className='search-wrap'>
            <label htmlFor={id}><FontAwesomeIcon icon={labelIcon} size='sm' className='mr-1' />{label}</label>
            <input className='search-field' type="search" name={id} id={id} placeholder={placeholder} autoFocus={autoFocus} />
        </div>
    );
};

export default AutoComplete;
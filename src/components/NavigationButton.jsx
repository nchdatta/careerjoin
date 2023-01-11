import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const NavigationButton = ({ label, icon, handleClick, className }) => {
    return (
        <button onClick={() => handleClick()} className={className}>
            <FontAwesomeIcon icon={icon} className='mr-1' />{label}
        </button>
    );
};

export default NavigationButton;
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const NavigationButton = ({ label, icon, handleClick, className }) => {
    return (
        <button onClick={handleClick} className={className}>
            {label}<FontAwesomeIcon icon={icon} />
        </button>
    );
};

export default NavigationButton;
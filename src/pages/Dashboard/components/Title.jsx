import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const Title = ({ title, to, icon }) => {
    return (
        <p className='title'>
            {title}
            <Link to={to}><FontAwesomeIcon icon={icon} className='ml-2 icon' /></Link>
        </p>
    );
};

export default Title;
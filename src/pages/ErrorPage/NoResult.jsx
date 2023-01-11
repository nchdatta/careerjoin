import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import NavigationButton from '../../components/NavigationButton';

const NoResult = ({ icon, title, subTitle, btnLabel, to }) => {
    return (
        <div className='saved-jobs'>
            <FontAwesomeIcon icon={icon} className='saved-icon' />
            <h2>{title}</h2>
            <p>{subTitle}</p>
            <NavigationButton label={btnLabel} to={to} className='btn' />
        </div>
    );
};

export default NoResult;
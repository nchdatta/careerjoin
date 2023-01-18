import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { NavLink } from 'react-router-dom';

const NavLinkCustom = ({ label, to, icon, handleClick, className }) => {
    return (
        <NavLink to={to} onClick={handleClick} className={className} title={label}>
            <FontAwesomeIcon icon={icon} className='mr-1' />
            <span className='nav-label'>{label}</span>
        </NavLink>
    );
};

export default NavLinkCustom;
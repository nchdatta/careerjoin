import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { NavLink } from 'react-router-dom';

const NavLinkCustom = ({ label, to, icon, className }) => {
    return (
        <NavLink to={to} className={className}>
            <FontAwesomeIcon icon={icon} className='mr-1' />
            <span className='nav-label'>{label}</span>
        </NavLink>
    );
};

export default NavLinkCustom;
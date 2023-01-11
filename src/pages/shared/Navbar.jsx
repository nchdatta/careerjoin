import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBullhorn, faPlusCircle, faBars, faClose, } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import NavLinkCustom from '../../components/NavLinkCustom';
import { Link } from 'react-router-dom';
import NavigationButton from '../../components/NavigationButton';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const menus = [
        { id: 1001, label: "Search jobs", to: '/', icon: faSearch },
        { id: 1002, label: "Post a job", to: '/recruiter', icon: faBullhorn },
        { id: 1003, label: "Post your CV", to: '/post-cv', icon: faPlusCircle },
    ];

    return (
        <header>
            <nav className='navbar'>
                <div className='navbar-brand'>
                    <Link to="/">careerjoin</Link>
                </div>
                <FontAwesomeIcon icon={faBars} size='xl' onClick={() => setIsOpen(!isOpen)} className='open-menu' />
                <div className="navbar-navs-parent">
                    <ul className='navbar-navs'>
                        <li><NavLinkCustom label='Search jobs' to='/' icon={faSearch} /></li>
                        <li><NavLinkCustom label='Post a job' to='/recruiter' icon={faBullhorn} /></li>
                    </ul>
                    <ul className='navbar-navs'>
                        <li><NavLinkCustom label='Post your CV' to="post-cv" icon={faPlusCircle} /></li>
                        <li><NavigationButton label='Sign in' to='login' className='login-btn' /></li>
                    </ul>
                </div>
            </nav>

            <div className={`navbar-navs-parent-mobile ${isOpen && 'block'}`}>
                <FontAwesomeIcon icon={faClose} size='2x' onClick={() => setIsOpen(!isOpen)} className='close-menu' />
                <ul className='navbar-navs'>
                    {menus.map(menu => <li key={menu.id} >
                        <NavLinkCustom label={menu.label} to={menu.to} icon={menu.icon} />
                    </li>)}
                    <li><NavigationButton label='Sign in' to='login' className='login-btn' /></li>
                </ul>
            </div>
        </header>
    );
};

export default Navbar;
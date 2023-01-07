import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBullhorn, faPlusCircle, faBars, faClose, } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header>
            <nav className='navbar'>
                <div className='navbar-brand'>
                    <a href="/">careerjoin</a>
                </div>
                <FontAwesomeIcon icon={faBars} size='xl' onClick={() => setIsOpen(!isOpen)} className='open-menu' />
                <div className="navbar-navs-parent">
                    <ul className='navbar-navs'>
                        <li><a href="/" className='active'><FontAwesomeIcon icon={faSearch} /> Search jobs</a></li>
                        <li><a href="/"><FontAwesomeIcon icon={faBullhorn} /> Post a job</a></li>
                    </ul>
                    <ul className='navbar-navs'>
                        <li><a href="/"><FontAwesomeIcon icon={faPlusCircle} /> Post your CV</a></li>
                        <li><p className='btn'>Sign in</p></li>
                    </ul>
                </div>
            </nav>

            <div className={`navbar-navs-parent-mobile ${isOpen && 'block'}`}>
                <FontAwesomeIcon icon={faClose} size='2x' onClick={() => setIsOpen(!isOpen)} className='close-menu' />
                <ul className='navbar-navs'>
                    <li><a href="/" className='active'><FontAwesomeIcon icon={faSearch} /> Search jobs</a></li>
                    <li><a href="/"><FontAwesomeIcon icon={faBullhorn} /> Post a job</a></li>
                    <li><a href="/"><FontAwesomeIcon icon={faPlusCircle} /> Post your CV</a></li>
                    <li><p className='btn'>Sign in</p></li>
                </ul>
            </div>
        </header>
    );
};

export default Navbar;
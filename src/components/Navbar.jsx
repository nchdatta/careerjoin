import React from 'react';

const Navbar = () => {
    return (
        <header>
            <nav className='navbar'>
                <div className='navbar-brand'>
                    <a href="/">careerjoin</a>
                </div>
                <button className='toggle-btn'>T</button>
                <div className='navbar-navs-parent'>
                    <ul className='navbar-navs'>
                        <li><a href="/">Search jobs</a></li>
                        <li><a href="/">Post a job</a></li>
                    </ul>
                    <ul className='navbar-navs'>
                        <li><a href="/">Post your CV</a></li>
                        <li><a href="/">Sign in</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
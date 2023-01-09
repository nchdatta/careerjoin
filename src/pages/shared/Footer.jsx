import React from 'react';
import { Link } from 'react-router-dom';
import NavLinkCustom from '../../components/NavLinkCustom';

const Footer = () => {
    const menus = [
        { id: 101, label: 'About us', to: '/about-us' },
        { id: 102, label: 'Frequent queries', to: '/frequent-queries' },
        { id: 103, label: 'Jobs by keywords', to: '/jobs-by-keywords' },
        { id: 104, label: 'Jobs by location', to: '/jobs-by-location' },
    ];

    return (
        <footer>
            <div className="footer-navs-wrap">
                <div className="footer-brand">
                    <Link to='/'>careerjoin</Link>
                </div>
                <ul className="footer-navs">
                    {menus.map(menu => <li key={menu.id}>
                        <NavLinkCustom label={menu.label} to={menu.to} />
                    </li>)}
                </ul>
            </div>
            <div className="copyright">
                <p>Copyright &copy; 2023 <Link to='/'>careerjoin</Link> &#x25CF; All Rights Reserved</p>
            </div>
        </footer>
    );
};

export default Footer;
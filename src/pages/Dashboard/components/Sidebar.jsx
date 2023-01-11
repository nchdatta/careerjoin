import React from 'react';
import NavLinkCustom from '../../../components/NavLinkCustom';
import { faPersonRifle, faUnlockKeyhole, faBookmark, faShare, faEnvelope, faFileArchive, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Sidebar = () => {
    const menus = [
        { label: 'Profile', to: '/profile', icon: faPersonRifle },
        { label: 'Change Password', to: '/profile/change-password', icon: faUnlockKeyhole },
        { label: 'Saved Jobs', to: '/profile/saved-jobs', icon: faBookmark },
        { label: 'Sent Applications', to: '/profile/applications', icon: faShare },
        { label: 'Cover Letter', to: '/profile/cover-letter', icon: faEnvelope },
        { label: 'Documents', to: '/profile/documents', icon: faFileArchive },
    ];
    return (
        <div className='dashboard-sidebar'>
            <ul className="navbar-navs">
                {menus.map(menu => <li>
                    <NavLinkCustom label={menu.label} to={menu.to} icon={menu.icon} />
                </li>)}
                <li><Link title='Sign out'><FontAwesomeIcon icon={faRightFromBracket} className='mr-1' /><span className='nav-label'>Sign out</span></Link></li>
            </ul>
        </div>
    );
};

export default Sidebar;
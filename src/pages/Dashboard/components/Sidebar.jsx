import React from 'react';
import NavLinkCustom from '../../../components/NavLinkCustom';
import { faPersonRifle, faUnlockKeyhole, faBookmark, faShare, faEnvelope, faFileArchive, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const { user, logout } = useAuth0();

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
                {user && <li><Link onClick={() => logout()} title='Sign out'><FontAwesomeIcon icon={faRightFromBracket} className='mr-1' /><span className='nav-label'>Sign out</span></Link></li>}
            </ul>
        </div>
    );
};

export default Sidebar;
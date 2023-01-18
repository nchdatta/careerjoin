import React from 'react';
import NavLinkCustom from '../../../components/NavLinkCustom';
import { faPersonRifle, faUnlockKeyhole, faBookmark, faShare, faEnvelope, faFileArchive } from '@fortawesome/free-solid-svg-icons';

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
                {menus.map((menu, i) => <li key={i}>
                    <NavLinkCustom label={menu.label} to={menu.to} icon={menu.icon} />
                </li>)}
            </ul>
        </div>
    );
};

export default Sidebar;
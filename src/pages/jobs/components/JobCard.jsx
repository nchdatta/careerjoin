import { faBookmark, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const JobCard = () => {
    return (
        <NavLink to='/job/1' className='job-card'>
            <div className='title'>
                <Link to='/job/1'>Sr. Software Developer (Full-Stack Developer, Docker, Laravel), React.js</Link>
                <FontAwesomeIcon icon={faBookmark} />
            </div>
            <p className='location'><FontAwesomeIcon icon={faLocationDot} size='sm' className='mr-1' />Location</p>
            <p className='description'>Job Context IGL Web Ltd is Software Company In Bangladesh Market From Last 15 Years, We are looking for a expert React js Front-end, Back-end, Docker, Laravel, React.js/Vue Js, Py</p>
            <p className='posting-time'>2 days ago</p>
        </NavLink>
    );
};

export default JobCard;
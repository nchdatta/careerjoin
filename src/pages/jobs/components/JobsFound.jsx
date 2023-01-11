import { faBell, faFilter } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import JobCard from './JobCard';

const JobsFound = ({ setIsFilterOpen }) => {
    return (
        <div className='jobs-found-container'>
            <div className='header-title'>
                <p>React Developer Jobs in Dhaka</p>
                <p className='available-jobs'>32 jobs</p>
                <button className='filter-search' onClick={() => setIsFilterOpen(true)} ><FontAwesomeIcon icon={faFilter} /> Filter</button>
            </div>
            <div className="header-action">
                <div>
                    <button className='all'>All</button>
                    <button className='new'>New</button>
                </div>
                <button className='creater-alert'><FontAwesomeIcon icon={faBell} size='lg' className='icon' /> Create alert</button>
            </div>
            <div className="job-cards">
                <JobCard />
                <JobCard />
            </div>
        </div>
    );
};

export default JobsFound;
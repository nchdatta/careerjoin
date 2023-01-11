import { faLocationCrosshairs, faLocationDot, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import AutoComplete from './AutoComplete';

const SearchJobs = () => {
    return (
        <div>
            <div className='search-jobs-wrap'>
                <form action="/jobs" method="get" className='search-jobs' autoComplete='off'>
                    <AutoComplete label='What' id='keyword' placeholder='Job title, keywords or company' autoFocus={true} labelIcon={faMagnifyingGlass} />
                    <AutoComplete label='Where' id='location' placeholder='Town or region' labelIcon={faLocationDot} />
                    <FontAwesomeIcon icon={faLocationCrosshairs} size='lg' className='faLocationCrosshairs' />
                    <button type='submit' className='search-btn'>Search</button>
                </form>
            </div>
        </div>
    );
};

export default SearchJobs;
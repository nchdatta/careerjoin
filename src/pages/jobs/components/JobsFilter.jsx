import { faClose, faSort } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import SearchJobs from '../../home/components/SearchJobs';

const JobsFilter = ({ filterOption }) => {
    const { isFilterOpen, setIsFilterOpen } = filterOption;

    return (
        <div className={`jobs-filter ${isFilterOpen && 'show'}`}>
            <div className='close-div'><FontAwesomeIcon icon={faClose} size='2x' className='close-btn' onClick={() => setIsFilterOpen(!isFilterOpen)} /></div>
            <SearchJobs />
            <div className='sort-by'>
                <h3>Sort By</h3>
                <FontAwesomeIcon icon={faSort} size='lg' />
                <select name="sort-by" id="sort-by">
                    <option>Relevance</option>
                    <option>Date</option>
                    <option>Salary</option>
                </select>
            </div>
            <div className="category">
                <h3>Category</h3>
                <button>Frontend Developer</button>
            </div>
            <div className="location">
                <h3>Location</h3>
                <button>Bangladesh</button>
            </div>
            <div>
                <h3>Contract type</h3>
                <button>Permanent <span className='ml-2'>(32)</span></button>
            </div>
            <div>
                <h3>Work type</h3>
                <button>Full-time <span className='ml-2'>(22)</span></button>
                <button>Part-time <span className='ml-2'>(12)</span></button>
            </div>
        </div>
    );
};

export default JobsFilter;
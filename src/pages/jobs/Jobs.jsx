import React, { useState } from 'react';
import JobsFilter from './components/JobsFilter';
import JobsFound from './components/JobsFound';

const Jobs = () => {
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    return (
        <div className='jobs-container'>
            {/* Jobs filter */}
            <JobsFilter filterOption={{ isFilterOpen, setIsFilterOpen }} />
            {/* Jobs found  */}
            <JobsFound setIsFilterOpen={setIsFilterOpen} />
        </div>
    );
};

export default Jobs;
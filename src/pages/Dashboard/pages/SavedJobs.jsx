import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import NoResult from '../../ErrorPage/NoResult';

const SavedJobs = () => {
    return (
        <div className='saved-jobs'>
            <NoResult
                title='No jobs saved yet'
                subTitle='To save an offer, tap the "Save this offer" button on the description page.'
                icon={faBookmark}
                btnLabel='Search jobs'
                to='/'
            />
        </div>
    );
};

export default SavedJobs;
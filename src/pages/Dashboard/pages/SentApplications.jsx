import { faShare } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import NoResult from '../../ErrorPage/NoResult';

const SentApplications = () => {
    return (
        <div className='sent-applications'>
            <NoResult
                title='No applications have been sent yet'
                subTitle='Your applications made on Careerjoin will be listed here.'
                icon={faShare}
                btnLabel='Search jobs'
                to='/'
            />
        </div>
    );
};

export default SentApplications;
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import NoResult from '../../ErrorPage/NoResult';

const CoverLetter = () => {
    return (
        <div className='cover-letter'>
            <NoResult
                title='No cover letter uploaded.'
                subTitle='CV allows you to apply very quickly to many jobs from any device.'
                icon={faEnvelope}
                btnLabel='Upload CV'
                to='/post-cv'
            />
        </div>
    );
};

export default CoverLetter;
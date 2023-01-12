import React from 'react';
import BillingInfo from './components/BillingInfo';
import JobDetails from './components/JobDetails';
import PaymentMethod from './components/PaymentMethod';
import PreviewDetails from './components/PreviewDetails';

const PostJob = () => {
    return (
        <div className='postjob-container'>
            <PaymentMethod />
        </div>
    );
};

export default PostJob;
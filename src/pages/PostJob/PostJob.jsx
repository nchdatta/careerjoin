import React, { useState } from 'react';
import JobDetails from './components/JobDetails';
import PreviewDetails from './components/PreviewDetails';
import BillingInfo from './components/BillingInfo';
import PaymentMethod from './components/PaymentMethod';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

const leftIcon = <FontAwesomeIcon icon={faAngleLeft} />;
const rightIcon = <FontAwesomeIcon icon={faAngleRight} />;

const PostJob = () => {
    const [page, setPage] = useState(0);
    const steps = ['Job Details', 'Preview Details', 'Billing Info', 'Payment'];

    const handlePrev = () => {
        setPage(current => current - 1);

    }
    const handleNext = (e) => {
        e.preventDefault();
        setPage(current => current + 1);
    }


    return (
        <div className='postjob-container'>
            <div className="stepper">
                {steps.map((step, i) => <div key={i} className={`step-item ${i <= page - 1 && 'completed'} ${page === i && 'active'}`}>
                    <div className='step'>{i + 1}</div>
                    <p>{step}</p>
                </div>)}
            </div>
            {page === 0 ? <JobDetails /> : page === 1 ? <PreviewDetails /> : page === 2 ? <BillingInfo /> : <PaymentMethod />}
            <div className="flex">
                <button className='btn-outline' disabled={page === 0} onClick={handlePrev}>{leftIcon}Back</button>
                <button className='btn' onClick={handleNext}>{page === 2 ? 'Save & continue' : page === 3 ? 'Pay' : 'Continue'} {rightIcon}</button>
            </div>
        </div>
    );
};

export default PostJob;
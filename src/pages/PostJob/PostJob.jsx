import React, { useState } from 'react';
import JobDetails from './components/JobDetails';
import PreviewDetails from './components/PreviewDetails';
import BillingInfo from './components/BillingInfo';
import PaymentMethod from './components/PaymentMethod';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { useForm } from 'react-hook-form';

const leftIcon = <FontAwesomeIcon icon={faAngleLeft} />;
const rightIcon = <FontAwesomeIcon icon={faAngleRight} />;

const PostJob = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [page, setPage] = useState(0);
    const steps = ['Job Details', 'Preview Details', 'Billing Info', 'Payment'];

    // if (errors) {
    //     console.log('Errors', errors)
    // }
    const handlePrev = () => {
        setPage(current => current - 1);

    }
    const handleNext = (data) => {
        console.log('Data', data)
        if (page === steps.length - 1) {
            console.log('Pay')
        } else if (page === 2) {
            localStorage.setItem('PostData', JSON.stringify(data));
            setPage(current => current + 1);
        } else {
            console.log('Page')
            setPage(current => current + 1);
        }
    }

    return (
        <div className='postjob-container'>
            <div className="stepper">
                {steps.map((step, i) => <div key={i} className={`step-item ${i <= page - 1 && 'completed'} ${page === i && 'active'}`}>
                    <div className='step'>{i + 1}</div>
                    <p>{step}</p>
                </div>)}
            </div>
            <form onSubmit={handleSubmit(handleNext)}>
                {page === 0 ? <JobDetails register={register} /> : page === 1 ? <PreviewDetails /> : page === 2 ? <BillingInfo register={register} /> : <PaymentMethod register={register} />}
                <div className="flex">
                    <button type='button' className='btn-outline' disabled={page === 0} onClick={handlePrev}>{leftIcon}Back</button>
                    <button className='btn'>{page === 2 ? 'Save & continue' : page === 3 ? 'Pay' : 'Continue'} {rightIcon}</button>
                </div>
            </form>
        </div>
    );
};

export default PostJob;
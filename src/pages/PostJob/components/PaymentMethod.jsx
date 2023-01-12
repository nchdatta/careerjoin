import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import RadioButton from '../../../components/RadioButton';

const PaymentMethod = () => {
    return (
        <div className='payment-method-wapper'>
            <div className='method-selection'>
                <h2>Select prefered method</h2>
                <RadioButton name='method' id='stripe' label='Stripe' checked />
                <RadioButton name='method' id='paypal' label='PayPal' />
            </div>
            <div className="flex">
                <button className='btn-outline'><FontAwesomeIcon icon={faAngleLeft} className='icon' /> Back</button>
                <button className='btn'>Pay</button>
            </div>
        </div>
    );
};

export default PaymentMethod;
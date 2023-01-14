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
        </div>
    );
};

export default PaymentMethod;
import React from 'react';
import DropDown from '../../../components/DropDown';
import EmailField from '../../../components/EmailField';
import TextField from '../../../components/TextField';

const BillingInfo = () => {
    return (
        <div className='job-details'>
            <div className="row">
                <TextField name='firstname' label='First name' required />
                <TextField name='surname' label='Surname' required />
            </div>
            <div className="row mb-3">
                <EmailField name='email' label='Email' required />
                <TextField name='phone' label='Phone number' />
            </div>
            <TextField name='street' label='Address' placeholder='9A, West Dhanmondi' required />
            <div className="row">
                <TextField name='state' label='State/ region' required />
                <TextField name='phone' label='Zip/ postal code' />
            </div>
            <DropDown name='country' label='Country' data={['Bangladesh', 'United States']} required />
        </div>
    );
};

export default BillingInfo;
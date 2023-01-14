import React from 'react';
import DropDown from '../../../components/DropDown';
import EmailField from '../../../components/EmailField';
import TextField from '../../../components/TextField';

const BillingInfo = ({ register }) => {
    return (
        <div className='job-details'>
            <div className="row">
                <TextField name='firstname' label='First name' register={register} required />
                <TextField name='surname' label='Surname' register={register} required />
            </div>
            <div className="row mb-3">
                <EmailField name='email' label='Email' register={register} required />
                <TextField name='phone' label='Phone number' register={register} />
            </div>
            <TextField name='street' label='Address' placeholder='9A, West Dhanmondi' register={register} required />
            <div className="row">
                <TextField name='state' label='State/ region' register={register} required />
                <TextField name='zip' label='Zip/ postal code' register={register} />
            </div>
            <DropDown name='country' label='Country' data={['Bangladesh', 'United States']} register={register} required />
        </div>
    );
};

export default BillingInfo;
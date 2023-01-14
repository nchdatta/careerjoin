import React from 'react';
import DropDown from '../../../components/DropDown';
import Input from '../../../components/Input';

const BillingInfo = ({ register }) => {
    return (
        <div className='job-details'>
            <div className="row">
                <Input name='firstname' label='First name' register={register} required />
                <Input name='surname' label='Surname' register={register} required />
            </div>
            <div className="row mb-3">
                <Input type='email' name='email' label='Email' register={register} required />
                <Input name='phone' label='Phone number' register={register} />
            </div>
            <Input name='street' label='Address' placeholder='9A, West Dhanmondi' register={register} required />
            <div className="row">
                <Input name='state' label='State/ region' register={register} required />
                <Input name='zip' label='Zip/ postal code' register={register} />
            </div>
            <DropDown name='country' label='Country' data={['Bangladesh', 'United States']} register={register} required />
        </div>
    );
};

export default BillingInfo;
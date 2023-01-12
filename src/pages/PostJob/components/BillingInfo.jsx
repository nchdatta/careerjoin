import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
                <TextField name='phone' label='Phone number' required />
            </div>
            <TextField name='street' label='Address' placeholder='9A, West Dhanmondi' required />
            <div className="row">
                <TextField name='state' label='State/ region' required />
                <TextField name='phone' label='Zip/ postal code' required />
            </div>
            <DropDown name='country' label='Country' data={['Bangladesh', 'United States']} />

            <div className="flex">
                <button className='btn-outline'><FontAwesomeIcon icon={faAngleLeft} className='icon' /> Back</button>
                <button className='btn'>Continue</button>
            </div>

        </div>
    );
};

export default BillingInfo;
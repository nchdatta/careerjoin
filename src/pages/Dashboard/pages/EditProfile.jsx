import React from 'react';
import DropDown from '../../../components/DropDown';
import TextField from '../../../components/TextField';
import Title from '../components/Title';

const EditProfile = () => {

    return (
        <div className='edit-profile'>
            <Title title='Edit Profile Information' />
            <form className='edit-form'>
                <div className="full-name">
                    <TextField name='firstname' label='First name' placeholder='Enter first name' required />
                    <TextField name='surname' label='Surname' placeholder='Enter surname' />
                </div>
                <TextField name='email' label='Email address' placeholder='Enter your email address' required />
                <TextField name='phone' label='Phone number' placeholder='+8801300421744' required />
                <TextField name='street' label='Street adrress' placeholder='Street 9A, West Dhanmondi ' />
                <DropDown name='state' label='State/ region' data={['Dhaka', 'Sylhet', 'Chottogram', 'Rajshahi', 'Rangpur', 'Barishal', 'Khulna']} />
                <DropDown name='country' label='Select country' data={['Bangladesh', 'United States', 'India']} />

                <button type='submit' className='btn-light'>Update</button>
            </form>
        </div>
    );
};

export default EditProfile;
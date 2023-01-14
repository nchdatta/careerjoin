import React from 'react';
import { useForm } from 'react-hook-form';
import DropDown from '../../../components/DropDown';
import Input from '../../../components/Input';
import useCountries from '../../../hooks/useCountries';
import Title from '../components/Title';

const EditProfile = () => {
    const [countries] = useCountries();
    const { register } = useForm();

    return (
        <div className='edit-profile'>
            <Title title='Edit Profile Information' />
            <form className='edit-form'>
                <div className="full-name">
                    <Input name='firstname' label='First name' placeholder='Enter first name' register={register} required />
                    <Input name='surname' label='Surname' placeholder='Enter surname' register={register} />
                </div>
                <Input name='email' label='Email address' placeholder='Enter your email address' register={register} required />
                <Input name='phone' label='Phone number' placeholder='+8801300421744' register={register} required />
                <Input name='street' label='Street adrress' placeholder='Street 9A, West Dhanmondi' register={register} />
                <DropDown name='state' label='State/ region' data={['Dhaka', 'Sylhet', 'Chottogram', 'Rajshahi', 'Rangpur', 'Barishal', 'Khulna']} register={register} />
                <DropDown name='country' label='Select country' data={countries} register={register} />

                <button type='submit' className='btn-light'>Update</button>
            </form>
        </div>
    );
};

export default EditProfile;
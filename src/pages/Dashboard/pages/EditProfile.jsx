import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import { useForm } from 'react-hook-form';
import DropDown from '../../../components/DropDown';
import Input from '../../../components/Input';
import useCountries from '../../../hooks/useCountries';
import Title from '../components/Title';

const EditProfile = () => {
    const [countries] = useCountries();
    const { register } = useForm();
    const { user } = useAuth0();

    return (
        <div className='edit-profile'>
            <Title title='Edit Profile Information' />
            <form className='edit-form'>
                <div className="full-name">
                    <Input name='firstname' label='First name' value={user.given_name} placeholder='Enter first name' register={register} required />
                    <Input name='surname' label='Surname' value={user.family_name} placeholder='Enter surname' register={register} />
                </div>
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
import React from 'react';
import { useForm } from 'react-hook-form';
import Input from '../../../components/Input';
import Title from '../components/Title';

const ChangePassword = () => {
    const { register } = useForm();

    return (
        <div className='change-password'>
            <Title title='Change Password' />
            <form className='change-password-form'>
                <Input type='password' name='password' label='Previous Password' placeholder='Password***' register={register} required />
                <Input type='password' name='new-password' label='New Password' placeholder='Password***' register={register} required />
                <Input type='password' name='retype-password' label='Retype Password' placeholder='Password***' register={register} required />
                <button type='submit' className='btn-light'>Change</button>
            </form>
        </div>
    );
};

export default ChangePassword;
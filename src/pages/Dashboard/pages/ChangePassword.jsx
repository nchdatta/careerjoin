import React from 'react';
import PasswordField from '../../../components/PasswordField';
import Title from '../components/Title';

const ChangePassword = () => {
    return (
        <div className='change-password'>
            <Title title='Change Password' />
            <form className='change-password-form'>
                <PasswordField name='password' label='Previous Password' required />
                <PasswordField name='new-password' label='New Password' required />
                <PasswordField name='retype-password' label='Retype Password' required />
                <button type='submit' className='btn-light'>Change</button>
            </form>
        </div>
    );
};

export default ChangePassword;
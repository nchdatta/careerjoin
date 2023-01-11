import React from 'react';
import PasswordField from '../../../components/PasswordField';
import Title from '../components/Title';

const ChangePassword = () => {
    return (
        <div className='change-password'>
            <Title title='Change Password' />
            <form className='change-password-form'>
                <PasswordField name='password' label='Previous Password' />
                <PasswordField name='new-password' label='New Password' />
                <PasswordField name='retype-password' label='Retype Password' />
                <button type='button' className='btn-light'>Change</button>
            </form>
        </div>
    );
};

export default ChangePassword;
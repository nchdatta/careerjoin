import { useAuth0 } from '@auth0/auth0-react';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import NavigationButton from '../../components/NavigationButton';
import logo from '../../logo.svg';
const Login = () => {
    const { loginWithRedirect } = useAuth0();
    return (
        <div className='login-container'>
            <img src={logo} alt="Logo" />
            <p>Log in/Sign up with Careerjoin account to continue</p>
            <div className="row">
                <NavigationButton label='Login' icon={faAngleRight} handleClick={() => loginWithRedirect({ screen_hint: 'login' })} className='btn-light' />
                <NavigationButton label='Signup' icon={faAngleRight} handleClick={() => loginWithRedirect({ screen_hint: 'signup' })} className='btn-light' />
            </div>
        </div>
    );
};

export default Login;
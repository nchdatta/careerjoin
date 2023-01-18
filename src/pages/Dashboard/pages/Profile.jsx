import { useAuth0 } from '@auth0/auth0-react';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import Title from '../components/Title';


const Profile = () => {
    const { user } = useAuth0();

    return (
        <div className='profile'>
            <Title title='Profile Information' to='/profile/edit-profile' icon={faEdit} />

            <div className='avatar'>
                <img src={user.picture} alt={user.name} />
            </div>
            <div className="personal-details">
                <h2>{user.name}</h2>
                <p className='nickname'>@{user.nickname}</p>
                <p>{user.email} {user.email_verified ? <span className='text-primary'>Verified</span> : <span className='text-danger'>Unverified</span>}</p>
                {user.phone && <p>Phone: {user.phone}</p>}
                {user.address &&
                    <>
                        <p>Address:</p>
                        <div className='address'>
                            <p>Street: 9A, New Dhanmondi</p>
                            <p>State: Dhaka</p>
                            <p>Country: Bangladesh</p>
                        </div>
                    </>}
            </div>

            <button className='btn-light bg-danger'>Account Deactivation</button>
        </div>
    );
};

export default Profile;
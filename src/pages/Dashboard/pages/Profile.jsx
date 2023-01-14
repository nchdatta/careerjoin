import { faEdit } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import Title from '../components/Title';


const Profile = () => {
    return (
        <div className='profile'>
            <Title title='Profile Information' to='/profile/edit-profile' icon={faEdit} />

            <div className='avatar'>
                <p>NA</p>
            </div>
            <div className="personal-details">
                <h2>Nayan Chandra Datta</h2>
                <p>Email: nayanchdatta02@gmail.com</p>
                <p>Phone: +8801300421748</p>
                <p>Address:</p>
                <div className='address'>
                    <p>Street: 9A, New Dhanmondi</p>
                    <p>State: Dhaka</p>
                    <p>Country: Bangladesh</p>
                </div>
            </div>

            <button className='btn-light bg-danger'>Account Deactivation</button>
        </div>
    );
};

export default Profile;
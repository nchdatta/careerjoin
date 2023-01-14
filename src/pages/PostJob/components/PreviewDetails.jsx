import { faExternalLink, faLocationDot, faClock, faMoneyCheckDollar, faHourglass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const PreviewDetails = () => {
    return (
        <div className='preview-details'>
            <div className='content'>
                <div className="header">
                    <h2>Web Developer</h2>
                    <p>Careerjoin</p>
                    <div className="row">
                        <p><FontAwesomeIcon icon={faLocationDot} className='icon' />Dhaka</p>
                        <p><FontAwesomeIcon icon={faMoneyCheckDollar} className='icon' />Tk. 10,000</p>
                        <p><FontAwesomeIcon icon={faHourglass} className='icon' />Permanent</p>
                        <p><FontAwesomeIcon icon={faClock} className='icon' />Full-time</p>
                    </div>
                </div>
                <div className="details">
                    <div className='job-details'>
                        React Developer Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto, similique. Velit architecto odio autem praesentium dolor perferendis laudantium rem a.
                    </div>
                    <div>
                        <p>About company</p>
                        <div className='company-details'>
                            <p>Careerjoin</p>
                            <p>Founded in 1990</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quibusdam ea ducimus commodi quas a minus eum esse ullam sapiente.</p>
                            <Link>Careerjoin <FontAwesomeIcon icon={faExternalLink} size='xs' /></Link>
                        </div>
                    </div>
                </div>
            </div>

            <h2>Your job offer is ready to be posted!</h2>
        </div>
    );
};

export default PreviewDetails;
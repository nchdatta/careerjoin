import React from 'react';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';
import img from "../../../assets/images/job-offer.svg";

const RecruiterCards = ({ h2, h3, p, btn, btnOutline, href = ['', ''], className }) => {

    return (
        <div className={`recruiter-cards ${className}`}>
            <div className='left-content'>
                <h2>{h2}</h2>
                <h3>{h3}</h3>
                <div>
                    {p.map(p => <p><FontAwesomeIcon icon={faCheckCircle} className='icon' /> {p}</p>)}
                </div>
                <div className='action-btns'>
                    <NavLink to={href[0]} className='btn'>{btn}</NavLink>
                    <NavLink to={href[1]} className='btn-outline'>{btnOutline}</NavLink>
                </div>
            </div>
            <div className='img'>
                <img src={img} alt="" />
            </div>
        </div>
    );
};

export default RecruiterCards;
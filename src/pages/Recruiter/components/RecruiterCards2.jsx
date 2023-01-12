import React from 'react';
import { NavLink } from 'react-router-dom';

const RecruiterCards2 = ({ img, h3, h2, p, href = '', className }) => {
    return (
        <div className={`recruiter-cards2 ${className}`}>
            <div className='left-content'>
                <h3>{h3}</h3>
                <h2>{h2}</h2>
                <p>{p}</p>
                <NavLink to={href} className='btn-outline'>Learn more</NavLink>
            </div>
            <div className="img">
                <img src={img} alt={h3} />
            </div>
        </div>
    );
};

export default RecruiterCards2;
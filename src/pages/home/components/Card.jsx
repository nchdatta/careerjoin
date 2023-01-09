import React from 'react';
import { NavLink } from 'react-router-dom';

const Card = ({ title, subtitle, img, to }) => {
    return (
        <NavLink to={to} className='card'>
            <div>
                <h2>{title}</h2>
                <p>{subtitle}</p>
            </div>
            <img src={img} alt={title} />
        </NavLink>
    );
};

export default Card;
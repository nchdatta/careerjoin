import React from 'react';
import NavLinkCustom from '../../../components/NavLinkCustom';

const Card = ({ img, title, subtitle, btnText }) => {
    return (
        <div className='card'>
            <div className='img'>
                <img src={img} alt="" />
            </div>
            <div className='content'>
                <h2>{title}</h2>
                <p>{subtitle}</p>
            </div>
            <div className='btn-div'>
                <NavLinkCustom label={btnText} className='btn' />
            </div>
        </div>
    );
};

export default Card;
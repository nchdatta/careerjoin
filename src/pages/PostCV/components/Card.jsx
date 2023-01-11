import React from 'react';
import NavigationButton from '../../../components/NavigationButton';

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
                <NavigationButton label={btnText} className='btn' />
            </div>
        </div>
    );
};

export default Card;
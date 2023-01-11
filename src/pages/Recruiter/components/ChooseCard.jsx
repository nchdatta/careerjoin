import React from 'react';

const ChooseCard = ({ title, p, img }) => {
    return (
        <div className='card'>
            <img src={img} alt={title} />
            <h3>{title}</h3>
            <p>{p}</p>
        </div>
    );
};

export default ChooseCard;
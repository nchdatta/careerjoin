import { faBangladeshiTakaSign, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const PkgCard = ({ pkg }) => {
    const { credits, rebate, price } = pkg;

    return (
        <div className='card'>
            <p><span className='bold'>{credits}%</span> job credits</p>
            <p><FontAwesomeIcon icon={faCheckCircle} className='icon' /> <b>{rebate}</b> rebate</p>
            <p><FontAwesomeIcon icon={faBangladeshiTakaSign} /> <span className='bold'>{price}</span></p>
        </div>
    );
};

export default PkgCard;
import React from 'react';
import img from "../../../assets/images/job-offer.svg";

const Header = ({ title, subTitle }) => {
    return (
        <div className='post-header'>
            <img src={img} alt="" />
            <h1>{title}</h1>
            <p>{subTitle}</p>
        </div>
    );
};

export default Header;
import React from 'react';


const RecruiterCards2 = ({ img, h3, h2, p, className }) => {
    return (
        <div className={`recruiter-cards2 ${className}`}>
            <div className='left-content'>
                <h3>{h3}</h3>
                <h2>{h2}</h2>
                <p>{p}</p>
                <button className='btn-outline'>Learn more</button>
            </div>
            <div className="img">
                <img src={img} alt={h3} />
            </div>
        </div>
    );
};

export default RecruiterCards2;
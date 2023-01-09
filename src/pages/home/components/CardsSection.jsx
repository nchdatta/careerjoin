import React from 'react';
import Card from './Card';
import cv from '../../../assets/images/resume.svg';
import joboffer from '../../../assets/images/job-offer.svg';

const CardsSection = () => {
    const data = [
        { id: 11, title: 'Upload your CV', subtitle: 'Find your dream job with Careerjoin.', img: cv, to: '/post-cv' },
        { id: 12, title: 'Post a job', subtitle: 'Find the perfect candidate', img: joboffer, to: '/post-job' },
    ]
    return (
        <div className='cards-wrap'>
            {data.map(card => <Card key={card.id} title={card.title} subtitle={card.subtitle} img={card.img} to={card.to} />)}
        </div>
    );
};

export default CardsSection;
import React from 'react';
import Card from './components/Card';
import img from '../../assets/images/resume.svg';

const PostCV = () => {
    const carddata = [
        { title: 'Upload your CV', subtitle: "Upload your CV and you'll be able to apply to jobs in just one click!", btnText: 'Upload', img: img },
        { title: 'Create your CV', subtitle: "Don't have a CV? Create one in no time with our easy-to-use CV builder tool.", btnText: 'Create', img: img },
    ];
    return (
        <div className='postcv-container'>
            <div className='header'>
                <h1>Post your CV</h1>
                <p>Adding your CV allows you to apply very quickly to many jobs from any device.</p>
            </div>
            <div className="cards">
                {carddata.map((card, i) => <Card key={i} title={card.title} subtitle={card.subtitle} btnText={card.btnText} img={card.img} />)}
            </div>
        </div>
    );
};

export default PostCV;
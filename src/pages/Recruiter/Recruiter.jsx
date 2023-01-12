import React from 'react';
import { NavLink } from 'react-router-dom';
import img from "../../assets/images/job-offer.svg";
import ChooseCard from './components/ChooseCard';
import Header from './components/Header';
import RecruiterCards from './components/RecruiterCards';
import RecruiterCards2 from './components/RecruiterCards2';

const Recruiter = () => {
    const choosedata = [
        { title: 'Cost-effective', p: 'Whether you choose to post your jobs directly or have them indexed automatically, our pricing model is highly competitive.', img: img },
        { title: 'Easy to use', p: 'We have created a streamlined user-interface so you can easily manage your jobs from your desktop or mobile', img: img },
        { title: 'Quality candidates', p: "Irrespective of your organisation's size and location, our search technology is able to match relevant candidates to your jobs", img: img },
    ];

    return (
        <div className='recruiter-container'>
            <Header title='Your next hire is here' subTitle='Publish your jobs on Careerjoin and start hiring the best candidates.' />

            <RecruiterCards
                h2='Post jobs directly'
                h3='Publish your vacancies and start receiving applications.'
                p={['Be featured in the top search results', 'Get quality applications directly to your inbox', 'Only ৳ 1,000 for 30 days']}
                btn='Post job'
                btnOutline='See packages'
                href={['/recruiter/post-job', '/recruiter/packages']}
            />
            <RecruiterCards
                h2='Automatically index jobs'
                h3='Jobs already online? Save time and have them listed automatically.'
                p={['Have your jobs updated on a daily basis', 'Promote the jobs that you want on demand', 'Track the performance of your campaigns on the dedicated recruiter interface', 'Start connecting with the candidates you deserve now.']}
                btn='Submit your website'
                btnOutline='Solutions to boost visibity'
                // href={['/recruiter/post-job', '/recruiter/packages']}
                className='row-reverse'
            />

            <RecruiterCards2
                h3='CV SEARCH'
                h2='Search thousands of candidate CVs'
                p='Quickly connect with thousands of qualified candidates and contact them directly through Careerjet. Hire swiftly by finding fresh candidates in every sector and every location.'
                img={img} />

            <RecruiterCards2
                h3='ATS'
                h2='Get the best from Careerjoin'
                p='More and more companies are using ATS software to make their HR process more efficient.'
                img={img}
                className='row-reverse' />


            <div className="choose-section">
                <h2 className='title'>Why choose Careerjoin?</h2>
                <div className='content'>
                    {choosedata.map(data => <ChooseCard title={data.title} p={data.p} img={data.img} />)}
                </div>
            </div>


            <div className="contact">
                <h2 className='title'>Have a question?</h2>
                <NavLink to='/contact-us'>Contact us</NavLink>
            </div>

        </div>
    );
};

export default Recruiter;
import React from 'react';
import CardsSection from './components/CardsSection';
import SearchJobs from './components/SearchJobs';

const Home = () => {
    return (
        <div id='home'>
            {/* Search jobs  */}
            <SearchJobs />
            {/* Total published jobs  */}
            <div className='published-jobs'>
                <p><span className='text-primary'>2,130</span> jobs published in Bangladesh</p>
            </div>
            <CardsSection />
        </div>
    );
};

export default Home;
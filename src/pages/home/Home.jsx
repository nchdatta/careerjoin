import React from 'react';
import CardsSection from './components/CardsSection';
import SearchJobs from './components/SearchJobs';

const Home = () => {
    return (
        <div id='home'>
            {/* Search jobs  */}
            <SearchJobs />
            <CardsSection />
        </div>
    );
};

export default Home;
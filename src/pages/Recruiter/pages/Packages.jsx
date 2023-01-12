import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import PkgCard from '../components/PkgCard';

const Packages = () => {
    const packages = [
        { credits: 10, rebate: 50, price: '1,000' },
        { credits: 20, rebate: 50, price: '1,500' },
        { credits: 40, rebate: 50, price: '2,500' },
    ];
    return (
        <div>
            <Header title='Packages and subscriptions' subTitle='Simple pricing. No surprise fees. Advanced features.' />
            <div className="posting-packages">
                <h2 className='title'>Choose prefered package</h2>

                <div className="packages">
                    {packages.map(pkg => <PkgCard key={pkg.credits} pkg={pkg} />)}
                </div>

                <div className="contact">
                    <h3>Want to post more?</h3>
                    <p>Please <Link to='/contact-us'>contact us</Link> and we'll find a personalised solution for you.</p>
                </div>
            </div>
        </div>
    );
};

export default Packages;
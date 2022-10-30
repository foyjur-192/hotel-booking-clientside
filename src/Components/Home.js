import React from 'react';
import HeroSection from './HeroSection';

const Home = () => {
    var date = new Date().toLocaleDateString();
    return (
        <div>
            <HeroSection date={date}></HeroSection>
        </div>
    );
};

export default Home;
import React from 'react';
import Navbar from '../components/Navbar';
import Card from '../components/Card';
import Banner from '../components/Banner';

const Home = () => {
    return (
        <div>
            <Banner />
            <Navbar />
            <Card title = "jérémie" />
        </div>
    );
};

export default Home;
import React from 'react';
import Card from '../components/Card';
import Banner from '../components/Banner';
import Header from '../components/Header';

const Home = () => {
    return (
        <main className='page_home'>
                <Header />
            <Banner />
            <Card />
        </main>
    );
};

export default Home;
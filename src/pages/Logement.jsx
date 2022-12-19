import React from 'react';
import Banner from '../components/Banner';
import Navbar from '../components/Navbar';
import Tag from '../components/Tag';
import "./Logement.css";


const Logement = () => {
    return (
        <div>
                <Banner />
         <Navbar />
         <Tag title = "sara" />
        </div>
    );
};

export default Logement;
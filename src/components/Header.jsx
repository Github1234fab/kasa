import React from 'react';
import { Link } from "react-router-dom";
import Logo from "../images/LOGO.png"


const Header = () => {
    return (
       <div>
        <div className='Header'> 
            Header
            </div>
              <img className='Logo' src={Logo} alt="" /> 
            <div className = "navbar">
            <Link to = "/">Accueil</Link>
            <Link to = "/à_propos">À propos</Link>
        </div>
        </div>
       
    );
};

export default Header;
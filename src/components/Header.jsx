import React from 'react';
import { Link } from "react-router-dom";
import Logo from "../images/LOGO.png"


const Header = () => {
    return (
        <div className = 'Header'>
            <img className = 'Logo' src={Logo} alt="" />
            <div className='header_menu'>
                <Link to = "/" className='header_liens'>Accueil</Link>
                <Link to= "/à_propos" className='header_liens'>À propos</Link>
            </div>
        </div>

    );
};

export default Header;
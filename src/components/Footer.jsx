import React from 'react';
import Logo from "../images/LOGO_blanc.png"

const Footer = () => {
    return (
        <div>
            <div className='Footer'>
                <img className='footer_Logo' src={Logo} alt="Logo de Kasa" />
                <div className='footer_notice'>© 2020 Kasa. All rights reserved</div>
            </div>
        </div>
    );
};

export default Footer;
import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div>
            <footer >
                <div className="footer">
                    Clicky Game
                    <span> </span> 
                    <span>
                        <img className="logo" src={require('../../img/react-logo-white.png')} alt="Logo" />
                    </span>
                </div>
            </footer>
        </div>
    )
}

export default Footer;
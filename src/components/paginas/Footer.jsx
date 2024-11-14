// src/components/Footer.js
import React from 'react';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import '../css/Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <p>&copy; {new Date().getFullYear()}. Todos os direitos reservados.</p>
            <div className="social-buttons">
                <a
                    href="https://www.instagram.com/ec_olivais/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-button instagram"
                >
                    <FaInstagram size={20} />
                </a>
                <a
                    href="https://www.facebook.com/p/Escola-de-Condu%C3%A7%C3%A3o-dos-Olivais-100067965917834/?locale=pt_BR "
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-button facebook"
                >
                    <FaFacebookF size={20} />
                </a>
            </div>
        </footer>
    );
};

export default Footer;
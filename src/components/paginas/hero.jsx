// src/components/EscolaDeConducaoA.js
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import imageA from '../assets/HeroOL.jpeg'; // Substitua pelo caminho da primeira imagem
import imageB from '../assets/HeroPDN.jpeg'; // Substitua pelo caminho da segunda imagem
import logoA from '../assets/logoOL.jpeg'; // Add the logo for School A
import logoB from '../assets/logoPDN.jpeg'; // Add the logo for School B
import '../css/Hero.css'; // Import the CSS file

const EscolaDeConducaoA = () => {
    return (
        <div className="hero-container">
            {/* Left side for School 1 */}
            <div className="hero-side">
                <img
                    src={imageA}
                    alt="Background Escola de Condução A"
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                    }}
                />
                <div className="hero-overlay">
                    <img src={logoA} alt="Escola de Condução A Logo" className="hero-logo" />
                    <h1 className="hero-title">Escola de Condução Olivais</h1>
                    <p className="hero-description">Mais que uma escola!</p>
                    <Link to="/Inicio-OL">
                        <button className="hero-button">Saiba Mais!</button>
                    </Link>
                </div>
            </div>

            {/* Right side for School 2 */}
            <div className="hero-side">
                <img
                    src={imageB}
                    alt="Background Escola de Condução B"
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                    }}
                />
                <div className="hero-overlay">
                    <img src={logoB} alt="Escola de Condução B Logo" className="hero-logo" />
                    <h1 className="hero-title">Escola de Condução Parque Das Nações</h1>
                    <p className="hero-description">Venha aprender connosco!</p>
                    <Link to="/Inicio-PDN">
                        <button className="hero-button">Saiba Mais!</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default EscolaDeConducaoA;


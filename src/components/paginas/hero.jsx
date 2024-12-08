// src/components/EscolaDeConducaoA.js
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import videobg1 from '../assets/EquipaOL.mp4';
import videobg2 from '../assets/video_bg_pdn.mp4';
import logoA from '../assets/logoOL.jpeg'; // Add the logo for School A
import logoB from '../assets/logoPDN.jpeg'; // Add the logo for School B
import '../css/Hero.css'; // Import the CSS file

const EscolaDeConducaoA = () => {
    return (
      <div className="hero-container">
        {/* Left side for School 1 */}
        <div className="hero-side">
          <video
            src={videobg1}
            autoPlay
            loop
            muted
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
            <h1 className="hero-title">Escola de Condução A</h1>
            <p className="hero-description">Learn to drive with the best instructors in town!</p>
            <Link to="/Inicio-OL">
              <button className="hero-button">
                Learn More
              </button>
            </Link>
          </div>
        </div>
  
        {/* Right side for School 2 */}
        <div className="hero-side">
          <video
            src={videobg2}
            autoPlay
            loop
            muted
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
            <h1 className="hero-title">Escola de Condução B</h1>
            <p className="hero-description">Drive safely with our professional and certified instructors.</p>
            <Link to="/Inicio-PDN">
              <button className="hero-button">
                Learn More
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  };
  
  export default EscolaDeConducaoA;

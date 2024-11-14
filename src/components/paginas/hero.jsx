// src/components/EscolaDeConducaoA.js
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import videobg from '../assets/videobg.mp4';
import '../css/Hero.css';

const EscolaDeConducaoA = () => {
    return (
        <>
            {/* Hero Section with Two Schools */}
            <div className="heroA">
                <video src={videobg} autoPlay loop muted></video>
                
                {/* School 1 */}
                <div className="school-half left">
                    <div className="school-content">
                        <h1>Escola de condução Olivais</h1>
                        <p>Aprende connosco Escola de condução Olivais, que oferece qualidade nas aulas de condução.</p>
                        {/* Link to Escola 1 page */}
                        <Link to="/Inicio-OL">
                            <button>Ver Escola</button>
                        </Link>
                    </div>
                </div>
                
                {/* School 2 */}
                <div className="school-half right">
                    <div className="school-content">
                        <h1>Escola de condução Parque das Nações</h1>
                        <p>Junte-se à Escola de condução Parque das Nações para ganhar confiança e habilidade na estrada com instrutores experientes.</p>
                        {/* Link to Escola 2 page */}
                        <Link to="/Inicio-PDN">
                            <button>Ver Escola</button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default EscolaDeConducaoA;

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
                        <h1>Escola 1</h1>
                        <p>Learn with us at Escola 1, offering quality driving lessons for all levels.</p>
                        {/* Link to Escola 1 page */}
                        <Link to="/Inicio-PDN">
                            <button>Visit Escola 1</button>
                        </Link>
                    </div>
                </div>
                
                {/* School 2 */}
                <div className="school-half right">
                    <div className="school-content">
                        <h1>Escola 2</h1>
                        <p>Join Escola 2 to gain confidence and skill on the road with experienced instructors.</p>
                        {/* Link to Escola 2 page */}
                        <Link to="/Inicio-PDN">
                            <button>Visit Escola 2</button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default EscolaDeConducaoA;

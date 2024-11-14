// src/components/Navbar.js
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Container, Nav, Navbar as BootstrapNavbar, Button } from 'react-bootstrap';
import { FaArrowLeft } from 'react-icons/fa';
import '../css/Navbar.css';
import logo from '../assets/logo.jpg';

const Navbar = () => {
    const [selectedSchool, setSelectedSchool] = useState('A');
    const [expanded, setExpanded] = useState(false);
    const location = useLocation();

    useEffect(() => {
        // Atualizar a escola com base no pathname atual
        if (location.pathname.includes('-OL')) {
            setSelectedSchool('A');
        } else if (location.pathname.includes('-PDN')) {
            setSelectedSchool('B');
        }
    }, [location.pathname]);

    const handleSchoolSelect = (school) => {
        setSelectedSchool(school);
        setExpanded(false);
        window.scrollTo(0, 0);
    };

    const schoolLinks = {
        A: [
            { to: "/Ensino-OL", label: "Ensino" },
            { to: "/Equipa-OL", label: "Equipa" },
            { to: "/FAQ-OL", label: "FAQ" },
        ],
        B: [
            { to: "/Ensino-PDN", label: "Ensino" },
            { to: "/Equipa-PDN", label: "Equipa" },
            { to: "/FAQ-PDN", label: "FAQ" },
        ]
    };

    const preRegistrationLink = selectedSchool === 'A' ? "/Contactos-OL" : "/Contactos-PDN";
    const isHomePage = location.pathname === '/';

    return (
        <BootstrapNavbar expand="lg" fixed="top" className={`navbar-custom ${isHomePage ? 'home-page' : ''}`} expanded={expanded}>
            <Container>
                {isHomePage ? (
                    <div className="d-flex justify-content-center w-100">
                        <img src={logo} alt="Logo" className="navbar-logo home-logo no-animation" />
                    </div>
                ) : (
                    <img src={logo} alt="Logo" className="navbar-logo" />
                )}
                
                {/* Botão de menu com classe específica */}
                <BootstrapNavbar.Toggle aria-controls="navbarNav" onClick={() => setExpanded(!expanded)} className="navbar-toggle" />
                
                <BootstrapNavbar.Collapse id="navbarNav">
                    {!isHomePage && (
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link
                                    className={`nav-link ${selectedSchool === 'A' ? 'text-white' : 'text-gray-500'} hover:text-white`}
                                    to="/Inicio-OL"
                                    onClick={() => handleSchoolSelect('A')}
                                >
                                    Olivais
                                </Link>
                            </li>
                            <li className="nav-item d-flex align-items-center mx-2">
                                <FaArrowLeft
                                    color="white"
                                    className={selectedSchool === 'B' ? 'rotate' : 'rotate-back'}
                                />
                            </li>
                            <li className="nav-item">
                                <Link
                                    className={`nav-link ${selectedSchool === 'B' ? 'text-white' : 'text-gray-500'} hover:text-white`}
                                    to="/Inicio-PDN"
                                    onClick={() => handleSchoolSelect('B')}
                                >
                                    Parque das Nações
                                </Link>
                            </li>
                        </ul>
                    )}

                    <Nav className="ms-auto">
                        {!isHomePage && schoolLinks[selectedSchool].map((link, index) => (
                            <li key={index} className="nav-item">
                                <Link
                                    to={link.to}
                                    className={`nav-link ${location.pathname === link.to ? 'text-white' : 'text-gray-500'} hover:text-white`}
                                    onClick={() => setExpanded(false)}
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                        {!isHomePage && (
                            <Button
                                variant="outline-light"
                                className="ms-3 custom-btn-form"
                                onClick={() => setExpanded(false)}
                                as={Link}
                                to={preRegistrationLink}
                                style={{ fontSize: '1.2rem' }}
                            >
                                Entre em contacto
                            </Button>
                        )}
                    </Nav>
                </BootstrapNavbar.Collapse>
            </Container>
        </BootstrapNavbar>
    );
};

export default Navbar;
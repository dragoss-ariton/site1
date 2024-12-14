// src/components/Navbar.js
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Container, Nav, Navbar as BootstrapNavbar } from 'react-bootstrap';
import { FaArrowLeft, FaSun, FaMoon } from 'react-icons/fa';
import '../css/Navbar.css';
import logo from '../assets/logo.jpg';

const Navbar = () => {
    const [selectedSchool, setSelectedSchool] = useState('A');
    const [expanded, setExpanded] = useState(false);
    const [isLightMode, setIsLightMode] = useState(false);  // Estado para controlar o modo escuro
    const location = useLocation();

    useEffect(() => {
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

    const toggleTheme = () => {
        setIsLightMode(!isLightMode);
        document.body.classList.toggle('light-mode', !isLightMode);
    };

    const isGreenRoute = location.pathname.includes('-OL');

    return (
        <BootstrapNavbar 
            expand="lg" 
            fixed="top" 
            className={`navbar-custom ${isHomePage ? 'home-page' : ''} ${isGreenRoute ? 'green-navbar' : ''} ${isLightMode ? 'navbar-light-mode' : ''}`}
        >
            <Container>
                {isHomePage ? (
                    <div className="d-flex justify-content-center w-100">
                        <img src={logo} alt="Logo" className="navbar-logo home-logo no-animation" />
                    </div>
                ) : (
                    <img src={logo} alt="Logo" className="navbar-logo" />
                )}
                
                <BootstrapNavbar.Toggle aria-controls="navbarNav" onClick={() => setExpanded(!expanded)} className="navbar-toggle" />
                
                <BootstrapNavbar.Collapse id="navbarNav">
                    {!isHomePage && (
                        <ul className="navbar-nav">
                            <li>
                                <Link
                                    className={`nav-link ${selectedSchool === 'A' ? (!isLightMode ? 'text-white' : 'text-black') : (!isLightMode ? 'text-gray-500' : 'text-gray-700')} hover:text-white`}
                                    to="/Inicio-OL"
                                    onClick={() => handleSchoolSelect('A')}
                                >
                                    Olivais
                                </Link>
                            </li>
                            <li className="d-flex align-items-center mx-2 nav-link">
                                <FaArrowLeft
                                    className={`${
                                        selectedSchool === 'B' ? 'rotate' : 'rotate-back'
                                    } ${isLightMode ? 'text-dark' : 'text-white'}`}
                                />
                            </li>
                            <li>
                                <Link
                                    className={`nav-link ${selectedSchool === 'B' ? (!isLightMode ? 'text-white' : 'text-black') : (!isLightMode ? 'text-gray-500' : 'text-gray-700')} hover:text-white`}
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
                            <li key={index}>
                                <Link
                                    to={link.to}
                                    className={`nav-link ${location.pathname === link.to ? 
                                        (isLightMode ? 'text-black' : 'text-white') 
                                        : 
                                        (isLightMode ? 'text-gray-700' : 'text-gray-500')} hover:text-white`}
                                    onClick={() => setExpanded(false)}
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                        {!isHomePage && (
                            <Link
                                to={preRegistrationLink}
                                className={`custom-btn-form mx-2 ${isLightMode ? 'outline-dark' : 'outline-light'}`}
                                onClick={() => setExpanded(false)}
                            >
                                Entre em contacto
                            </Link>
                        )}
                        <button
                            className={`theme-toggle-btn mx-2 ${isLightMode ? '' : 'text-white'}`}
                            onClick={toggleTheme}
                        >
                            {isLightMode ? <FaSun /> : <FaMoon />}
                        </button>
                    </Nav>
                </BootstrapNavbar.Collapse>
            </Container>
        </BootstrapNavbar>
    );
};

export default Navbar;

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
    const [isLightMode, setIsLightMode] = useState(() => {
        const storedMode = localStorage.getItem('theme');
        return storedMode ? storedMode === 'light' : false;
    });
    const location = useLocation();

    // Verifica o tema armazenado no localStorage
    useEffect(() => {
        document.body.classList.toggle('light-mode', isLightMode);
    }, [isLightMode]);

    // Atualiza a seleção da escola com base no pathname
    useEffect(() => {
        const determineSchool = (pathname) => {
            if (pathname.includes('-OL')) return 'A';
            if (pathname.includes('-PDN')) return 'B';
            return 'A'; // Valor padrão
        };
        
        setSelectedSchool(determineSchool(location.pathname));
    }, [location.pathname]);

    // Função para alternar o tema
    const toggleTheme = () => {
        const newMode = isLightMode ? 'light' : 'dark';
        setIsLightMode(!isLightMode);
        localStorage.setItem('theme', newMode);
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

    // Função para gerenciar a classe de estilo dos links
    const schoolLinkClass = (school) => {
        return `nav-link ${selectedSchool === school ? 
            (isLightMode ? 'text-black' : 'text-white') 
            : 
            (isLightMode ? 'text-gray-700' : 'text-gray-500')} hover:text-white`;
    };

    return (
        <BootstrapNavbar 
            expand="lg" 
            fixed="top" 
            className={`navbar-custom ${isHomePage ? 'home-page' : ''} ${location.pathname.includes('-OL') ? 'green-navbar' : ''} ${isLightMode ? 'navbar-light-mode' : ''}`}
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
                                    className={schoolLinkClass('A')}
                                    to="/Inicio-OL"
                                    onClick={() => setSelectedSchool('A')}
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
                                    className={schoolLinkClass('B')}
                                    to="/Inicio-PDN"
                                    onClick={() => setSelectedSchool('B')}
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
                            className={`theme-toggle-btn mx-2 ${isLightMode ? '' : ''}`}
                            onClick={toggleTheme}
                            aria-label={isLightMode ? "Switch to dark mode" : "Switch to light mode"}
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
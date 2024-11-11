import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Container, Nav, Navbar as BootstrapNavbar } from 'react-bootstrap';
import { FaArrowLeft } from 'react-icons/fa';
import './Navbar.css';
import logo from './logo.jpg'; // Importa corretamente a imagem

const Navbar = () => {
    const [selectedSchool, setSelectedSchool] = useState('A'); // Rastreia a escola selecionada
    const [expanded, setExpanded] = useState(false); // Estado para controlar a expansão da Navbar
    const location = useLocation(); // Hook para obter a URL atual

    // Função para clicar no link e rolar até o topo, e colapsar a navbar
    const handleSchoolSelect = (school) => {
        setSelectedSchool(school);
        setExpanded(false); // Colapsa a Navbar
        window.scrollTo(0, 0); // Rola para o topo da página
    };

    // Define os links para ambas as escolas (A e B)
    const schoolLinks = {
        A: [
            { to: "/sobre-nos-olivais", label: "Sobre Nós" },
            { to: "/ensino-olivais", label: "Ensino" },
            { to: "/equipa-olivais", label: "Equipa" },
            { to: "/faq-olivais", label: "FAQ" },
        ],
        B: [
            { to: "/sobre-nos-parque-das-nacoes", label: "Sobre Nós" },
            { to: "/ensino-parque-das-nacoes", label: "Ensino" },
            { to: "/equipa-parque-das-nacoes", label: "Equipa" },
            { to: "/faq-parque-das-nacoes", label: "FAQ" },
        ]
    };

    return (
        <BootstrapNavbar expand="lg" fixed="top" className="navbar-custom" expanded={expanded}>
            <Container>
                <img src={logo} alt="Logo" className="navbar-logo" />
                <BootstrapNavbar.Toggle aria-controls="navbarNav" onClick={() => setExpanded(!expanded)} />
                <BootstrapNavbar.Collapse id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link
                                className={`nav-link ${selectedSchool === 'A' ? 'text-white' : 'text-gray-500'} hover:text-white`}
                                to="/escola-conducao-olivais"
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
                                to="/escola-conducao-parque-das-nacoes"
                                onClick={() => handleSchoolSelect('B')}
                            >
                                Parque das Nações
                            </Link>
                        </li>
                    </ul>

                    <Nav className="ms-auto">
                        {/* Renderiza dinamicamente os links com base na escola selecionada */}
                        {schoolLinks[selectedSchool].map((link, index) => (
                            <li key={index} className="nav-item">
                                <Link
                                    to={link.to}
                                    className={`nav-link ${location.pathname === link.to ? 'text-white' : 'text-gray-500'} hover:text-white`}
                                    onClick={() => setExpanded(false)} // Colapsa a Navbar ao clicar no link
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </Nav>
                </BootstrapNavbar.Collapse>
            </Container>
        </BootstrapNavbar>
    );
};

export default Navbar;
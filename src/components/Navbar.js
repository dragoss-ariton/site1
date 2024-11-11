import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { Container, Nav } from 'react-bootstrap';

const Navbar = () => {
    const [selectedSchool, setSelectedSchool] = useState('A');

    const handleSchoolSelect = (school) => {
        setSelectedSchool(school);
        window.scrollTo(0, 0); // Scroll para o início da página
    };

    const schoolLinks = {
        A: [
            { href: "#sobre", label: "Sobre Nós" },
            { href: "#cursos", label: "Cursos" },
            { href: "#precos", label: "Preços" },
            { href: "#contactos", label: "Contactos" },
        ],
        B: [
            { href: "#sobre", label: "Sobre Nós" },
            { href: "#cursos", label: "Cursos" },
            { href: "#precos", label: "Preços" },
            { href: "#contactos", label: "Contactos" },
        ]
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <Container>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
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
                        {(selectedSchool && schoolLinks[selectedSchool]) &&
                            schoolLinks[selectedSchool].map((link, index) => (
                                <Nav.Link
                                    key={index}
                                    href={link.href}
                                    className={`nav-link ${selectedSchool === 'A' || selectedSchool === 'B' ? 'text-white' : 'text-gray-500'} hover:text-white`}
                                >
                                    {link.label}
                                </Nav.Link>
                            ))
                        }
                    </Nav>
                </div>
            </Container>
        </nav>
    );
};

export default Navbar;
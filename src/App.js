// src/App.js
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

// Importações das páginas
import Navbar from "./components/paginas/Navbar";
import Hero from "./components/paginas/hero";
import Footer from "./components/paginas/Footer";

import InicioPdn from "./components/paginas/Inicio_PDN";
import InicioOl from "./components/paginas/Inicio_OL";

import EnsinoOL from "./components/paginas/Ensino_OL";
import EnsinoPdn from "./components/paginas/Ensino_PDN";

import EquipaOL from "./components/paginas/EquipaOL";
import EquipaPDN from "./components/paginas/EquipaPDN";

import FaqPDN from "./components/paginas/FaqPDN";
import FaqOL from "./components/paginas/FaqOL";

import ContactosOL from "./components/paginas/Contactos_OL";
import ContactosPdn from "./components/paginas/Contactos_PDN";

import ScrollToTop from "./components/paginas/ScrollToTop"; 

import "./App.css";
import "./components/css/Navbar.css";

const AppContent = () => {
  const location = useLocation(); // Pega a localização da rota atual

  useEffect(() => {
    if (location.pathname === '/') {
        // Remover o padding-top na página inicial
        document.body.style.paddingTop = '0';
    } else {
        // Definir o padding-top quando não for a página inicial
        document.body.style.paddingTop = '55px'; // Ou qualquer outro valor
    }
  }, [location]);

  return (
    <div className="main-content">
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/Inicio-PDN" element={<InicioPdn />} />
        <Route path="/Inicio-OL" element={<InicioOl />} />
        <Route path="/Ensino-PDN" element={<EnsinoPdn />} />
        <Route path="/Ensino-OL" element={<EnsinoOL />} />
        <Route path="/Faq-PDN" element={<FaqPDN />} />
        <Route path="/Faq-OL" element={<FaqOL />} />
        <Route path="/Contactos-PDN" element={<ContactosPdn />} />
        <Route path="/Contactos-OL" element={<ContactosOL />} />
        <Route path="/Equipa-OL" element={<EquipaOL />} />
        <Route path="/Equipa-PDN" element={<EquipaPDN />} />
      </Routes>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <AppContent /> {/* Separado para garantir o uso correto do Router */}
      <Footer />
    </Router>
  );
};

export default App;
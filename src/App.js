// src/App.js
<<<<<<< HEAD
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//Importação das páginas
import Navbar from './components/Navbar';
import EscolaConducaoA from './components/escola-olivais/EscolaConducaoA';
import EscolaConducaoB from './components/escola-PDN/EscolaConducaoB';
import SobrenosA from './components/escola-olivais/sobre-nos-A';
import SobrenosB from './components/escola-PDN/sobre-nos-B';
import EquipaA from './components/escola-olivais/Equipa-A';
import EquipaB from './components/escola-PDN/Equipa-B';
import EnsinoA from './components/escola-olivais/Ensino-A';
import EnsinoB from './components/escola-PDN/Ensino-B';
import FAQA from './components/escola-olivais/FAQ-A';
import FAQB from './components/escola-PDN/FAQ-B';
import PreInscricaoA from './components/escola-olivais/PreInscricaoA';
import PreInscricaoB from './components/escola-PDN/PreInscricaoB';

import './App.css';
=======
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
>>>>>>> ca7d758e187103ef170f980d5bb5fcb817734c70

// Importações das páginas
import Navbar from "./components/paginas/Navbar"; // Fixed import name
import Hero from "./components/paginas/hero";
import InicioPnd from "./components/paginas/Inicio_PND";
import ServicosPnd from "./components/paginas/Servicos_PND";
import EnsinoPnd from "./components/paginas/Ensino_PND";
import FaqPnd from "./components/paginas/Faq_PND";
import ContactosPnd from "./components/paginas/Contactos_PND";

import "./App.css";

const App = () => {
<<<<<<< HEAD
    return (
        <Router>
            <Navbar />
                <Routes className="main-content">
                    <Route path="/" element={<EscolaConducaoA />} />
                    <Route path="/escola-conducao-olivais" element={<EscolaConducaoA />} />
                    <Route path="/escola-conducao-parque-das-nacoes" element={<EscolaConducaoB />} />
                    <Route path="/sobre-nos-olivais" element={<SobrenosA />} />
                    <Route path="/sobre-nos-parque-das-nacoes" element={<SobrenosB />} />
                    <Route path="/equipa-olivais" element={<EquipaA />} />
                    <Route path="/equipa-parque-das-nacoes" element={<EquipaB />} />
                    <Route path="/ensino-olivais" element={<EnsinoA />} />
                    <Route path="/ensino-parque-das-nacoes" element={<EnsinoB />} />
                    <Route path="/FAQ-olivais" element={<FAQA />} />
                    <Route path="/FAQ-parque-das-nacoes" element={<FAQB />} />
                    <Route path="/pre-inscricao-olivais" element={<PreInscricaoA />} />
                    <Route path="/pre-inscricao-parque-das-nacoes" element={<PreInscricaoB/>} />
                </Routes>
        </Router>
    );
=======
  return (
    <Router>
      {/* Navbar will be displayed on all pages */}
      <Navbar />

      <div className="main-content">
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/Contactos_PND" element={<ContactosPnd />} />
          <Route path="/Inicio_PND" element={<InicioPnd />} />
          <Route path="/Servicos_PND" element={<ServicosPnd />} />
          <Route path="/Ensino_PND" element={<EnsinoPnd />} />
          <Route path="/FAQ-parque-das-nacoes" element={<FaqPnd />} />
        </Routes>
      </div>
    </Router>
  );
>>>>>>> ca7d758e187103ef170f980d5bb5fcb817734c70
};

export default App;

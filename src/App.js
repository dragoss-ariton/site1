// src/App.js
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



const App = () => {
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
};

export default App;
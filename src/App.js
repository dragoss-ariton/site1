// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EscolaConducaoA from './components/escola-olivais/EscolaConducaoA';
import EscolaConducaoB from './components/escola-PDN/EscolaConducaoB';
import Navbar from './components/Navbar';
import SobrenosB from './components/escola-PDN/sobre-nos-B';
import SobrenosA from './components/escola-olivais/sobre-nos-A';


const App = () => {
    return (
        <Router>
            <Navbar />
                <Routes>
                    <Route path="/" element={<EscolaConducaoA />} />
                    <Route path="/escola-conducao-olivais" element={<EscolaConducaoA />} />
                    <Route path="/escola-conducao-parque-das-nacoes" element={<EscolaConducaoB />} />
                    <Route path="/sobre-nos-parque-das-nacoes" element={<SobrenosB />} />
                    <Route path="/sobre-nos-olivais" element={<SobrenosA />} />
                </Routes>
        </Router>
    );
};

export default App;
// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EscolaConducaoA from './components/EscolaConducaoA';
import EscolaConducaoB from './components/EscolaConducaoB';
import Navbar from './components/Navbar';

const App = () => {
    return (
        <Router>
            <Navbar />
                <Routes>
                    <Route path="/" element={<EscolaConducaoA />} />
                    <Route path="/escola-conducao-olivais" element={<EscolaConducaoA />} />
                    <Route path="/escola-conducao-parque-das-nacoes" element={<EscolaConducaoB />} />
                </Routes>
        </Router>
    );
};

export default App;
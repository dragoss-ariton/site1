// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EscolaDeConducao from './components/EscolaConducao'; // Certifique-se de que este caminho e nome do arquivo estão corretos

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/escola-de-conducao" element={<EscolaDeConducao />} /> {/* Rota para a nova página */}
            </Routes>
        </Router>
    );
};

export default App;
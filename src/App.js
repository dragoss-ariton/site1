// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Importações das páginas
import Navbar from "./components/paginas/Navbar"; // Fixed import name
import Hero from "./components/paginas/hero";
import InicioPdn from "./components/paginas/Inicio_PDN";
import ServicosPdn from "./components/paginas/Servicos_PDN";
import EnsinoPdn from "./components/paginas/Ensino_PDN";
import FaqPdn from "./components/paginas/Faq_PDN";
import ContactosPdn from "./components/paginas/Contactos_PDN";

import "./App.css";

const App = () => {
  return (
    <Router>
      {/* Navbar will be displayed on all pages */}
      <Navbar />

      <div className="main-content">
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/Inicio-PDN" element={<InicioPdn />} />
          <Route path="/Servicos-PDN" element={<ServicosPdn />} />
          <Route path="/Ensino-PDN" element={<EnsinoPdn />} />
          <Route path="/FAQ-PDN" element={<FaqPdn />} />
          <Route path="/Contactos-PDN" element={<ContactosPdn />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
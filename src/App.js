// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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
};

export default App;

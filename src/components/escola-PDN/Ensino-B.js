// src/Servicos.js
import React from 'react';
import './Servicos.css';

const Servicos = () => {
    return (
        <div className="servicos-container">
            <h1 className="servicos-title">Serviços</h1>
            <div className="cards-container">
                <div className="card">
                    <span className="icon">🚗</span>
                    <h2>Categorias lecionadas</h2>
                    <p>A, A1, A2, B, C, D, E</p>
                </div>
                <div className="card">
                    <span className="icon">📅</span>
                    <h2>Renovações de carta</h2>
                    <p>Precisa renovar a sua carta? Entre em contacto conosco para saber quais os prazos e o que necessita para a renovação.</p>
                </div>
                <div className="card">
                    <span className="icon">🚦</span>
                    <h2>Aulas de treino</h2>
                    <p>Volte a conduzir com confiança com as nossas aulas de treino.</p>
                </div>
                <div className="card">
                    <span className="icon">📄</span>
                    <h2>Segundas vias e alterações</h2>
                    <p>Se perdeu, danificou ou roubou a sua carta de condução, temos a solução.</p>
                </div>
            </div>
        </div>
    );
};

export default Servicos;

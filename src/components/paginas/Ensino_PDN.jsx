// src/Encino_PND.jsx
import React from 'react';
import '../css/Servicos.css';
import videobg from '../assets/video_bg_pdn.mp4';

const servicosData = [
    {
        icon: '🚗',
        title: 'Categorias lecionadas',
        description: 'Carta de Ligeiros, Motociclos Cat A, A2 e A1'
    },
    {
        icon: '📅',
        title: 'Renovações de carta',
        description: 'Precisa renovar a sua carta? Entre em contacto conosco para saber quais os prazos e o que necessita para a renovação.'
    },
    {
        icon: '🚦',
        title: 'Treino a encartados',
        description: 'Volte a conduzir com confiança com as nossas aulas de treino.'
    },
    {
        icon: '📄',
        title: 'Segundas vias e alterações',
        description: 'Tratamos da Renovação da Carta, 2ª via da Carta e Alteração de Dados (Morada, Nome);'
    }
];

const Ensino_PND = () => {
    return (
        <div className="servicos-container">
            <video src={videobg} autoPlay loop muted></video>
            <h1 className="servicos-title">Serviços</h1>
            <div className="cards-container">
                {servicosData.map((servico, index) => (
                    <div className="card" key={index}>
                        <span className="icon">{servico.icon}</span>
                        <h2>{servico.title}</h2>
                        <p>{servico.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Ensino_PND;
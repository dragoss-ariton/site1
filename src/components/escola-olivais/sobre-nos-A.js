// src/SobreNos.js
import React from 'react';
import '../SobreNos.css';

const sobrenosA = () => {
    return (
        <div className="sobre-nos-container">
            <h1>Sobre Nós</h1>
            <p>
                Bem-vindo à Escola de Condução Olivais! Estamos dedicados a formar condutores seguros e confiantes, proporcionando
                uma experiência de ensino de alta qualidade. Localizados no coração do Parque das Nações, temos orgulho de fazer parte
                da sua jornada para obter a carta de condução.
            </p>
            
            <h2>Localização</h2>
            <div className="map-container">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3110.839348605418!2d-9.11239308879525!3d38.767388571634356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd19322f81a7b9cb%3A0x55005c8f8f815a3e!2sEscola%20de%20Condu%C3%A7%C3%A3o%20dos%20Olivais!5e0!3m2!1spt-PT!2spt!4v1731347302456!5m2!1spt-PT!2spt" 
                    width="600"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Escola de Condução Olivais"
                ></iframe>
            </div>
        </div>
    );
};

export default sobrenosA;
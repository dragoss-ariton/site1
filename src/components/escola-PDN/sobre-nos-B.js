// src/SobreNos.js
import React from 'react';
import '../SobreNos.css';

const sobrenosB = () => {
    return (
        <div className="sobre-nos-container">
            <h1>Sobre Nós</h1>
            <p>
                Bem-vindo à Escola de Condução Parque das Nações! Estamos dedicados a formar condutores seguros e confiantes, proporcionando
                uma experiência de ensino de alta qualidade. Localizados no coração do Parque das Nações, temos orgulho de fazer parte
                da sua jornada para obter a carta de condução.
            </p>
            
            <h2>Localização</h2>
            <div className="map-container">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3110.4867005428546!2d-9.098427488794801!3d38.77547557163249!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd19318c711cdb87%3A0xe7088e0294289300!2zRXNjb2xhIGRlIENvbmR1w6fDo28gUGFycXVlIGRhcyBOYcOnw7Vlcw!5e0!3m2!1spt-PT!2spt!4v1731341368093!5m2!1spt-PT!2spt"
                    width="600"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Escola de Condução Parque das Nações"
                ></iframe>
            </div>
        </div>
    );
};

export default sobrenosB;

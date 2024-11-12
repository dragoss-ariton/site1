// src/SobreNosB.js
import React from 'react';
import '../SobreNos.css';

const SobreNosB = () => {
    return (
        <div className="sobre-nos-container">
            
            <div className="info-container">
                <h1>Sobre Nós</h1>
                <p>
                     A Escola de Condução Parque das Nações pertence a uma nova geração de escolas de condução,e por isso aposta nas mais modernas tecnologias de ensino de condução.É formada por uma equipa jovem e dinâmica de formadores, com elevada experiência e responsabilidade no ensino de condução, tendo em atenção as várias necessidade dos candidatos a condutores de automóveis ligeiros, motociclo das categorias A1,A2,e A e a condutores que precisam de melhorar a sua condução.
                </p>
            </div>

            <div className="contact-container">
                {/* Contact Information Section */}
                <div className="contact-details">
                    <p><strong>Morada:</strong><br /> Passeio das Fragatas N°3A loja 4, 1990-615 Lisboa</p>
                    <p><strong>Telefone:</strong><br /> +351 915 195 646 <span>«chamada para rede móvel nacional»</span><br /> +351 218 949 011  <span>«chamada rede fixa nacional»</span></p>
                    <p><strong>E-mail:</strong><br /> ec.parquedasnacoes@gmail.com</p>
                    <p><strong>Horário Secretaria:</strong><br />Segunda a Sexta | 10:00 – 13:00 / 15:00 – 20:00<br /> Domingo | Fechado</p>
                </div>
                
                {/* Map Section with Social Media Links */}
                <div className="map-container">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3110.4867005428546!2d-9.098427488794801!3d38.77547557163249!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd19318c711cdb87%3A0xe7088e0294289300!2zRXNjb2xhIGRlIENvbmR1w6fDo28gUGFycXVlIGRhcyBOYcOnw7Vlcw!5e0!3m2!1spt-PT!2spt!4v1731341368093!5m2!1spt-PT!2spt"
                        width="100%"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Escola de Condução Parque das Nações"
                    ></iframe>

                    </div>
                </div>
            </div>
    );
};

export default SobreNosB;
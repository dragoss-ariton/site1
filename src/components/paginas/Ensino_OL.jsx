import React, { useState } from 'react';
import '../css/css_OL/Servicos.css';
import Infra3OL from '../assets/Infra2OL.jpg';
import Infra1OL from '../assets/Infra4OL.jpg';
import Infra2OL from '../assets/Infra5OL.jpg';
import frotaImagem from "../assets/FrotaOL.jpg";

const PopupBoxes = () => {
  const [activePopup, setActivePopup] = useState(null);

  // Box data with titles, images, and descriptions
  const boxes = [
    {
      id: 0,
      title: "Categorias lecionadas",
      imgSrc: frotaImagem,
      description: ["Aqui apenas é lecionada a carta de ligeiros, categoria B"],
    },
    {
      id: 1,
      title: "Pacote",
      imgSrc: Infra1OL,
      description: [{ title: "O que inclui?", content: ["-Inscrição e Aulas de código ilimitadas","-32 aulas de condução, situação real, trânsito(sem simulador)","-Exame Teórico e Prático privado (escolhe o dia e hora que deseja fazer o exame)","-Oferta do livro, código"] }],
    },
    {
      id: 2,
      title: "Horários",
      imgSrc: Infra3OL,
      description: [
        { title: "Código:", content: ["-2ª a 6ª às 12h, 17h, 18h, 19h", "-Sábados às 10h, 11h, 12h"] },
        { title: "Condução:", content: ["-2ª a 6ª das 7h às 20h", "-Sábados das 7h às 13h"] },
        { title: "Secretária:", content: ["-2ª a 6ª das 10h às 13h / 14.30h às 20h", "-Sábados das 10h às 13h"] },
      ],
    },
    {
      id: 3,
      title: "English driving course",
      imgSrc: Infra2OL,
      description: [
        "-On Category B cards in English, the codebook is included, this translated from Portuguese to English.",
        "-The medical certificate is included."
      ],
    },
  ];

  const handleBoxClick = (boxIndex) => {
    setActivePopup(boxIndex);
  };

  const handleClosePopup = () => {
    setActivePopup(null);
  };

  return (
    <div className="services-container1-OL">
      <h1 className="title-services1-OL">Os <span>Nossos</span> Serviços</h1>
      <div className="container1-OL">
        {boxes.map((box) => (
          <div key={box.id} className="box1-OL" onClick={() => handleBoxClick(box.id)}>
            <div className="box-image-container1-OL">
              <img src={box.imgSrc} alt={box.title} className="box-image1-OL" />
              <div className="box-title-overlay1-OL">
                <p className="box-title1-OL">{box.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {activePopup !== null && (
        <div>
          <div className="popup1-OL">
            <h2>{boxes[activePopup].title}</h2>
            
              {boxes[activePopup].description.map((item, index) => {
                if (typeof item === "object" && item.title) {
                  return (
                    <div key={index}>
                      <b><p>{item.title}</p></b>
                        {item.content.map((contentItem, contentIndex) => (
                          <p key={contentIndex}>{contentItem}</p>
                        ))}
                    </div>
                  );
                } else {
                  return <p key={index}>{item}</p>;
                }
              })}
            <button onClick={handleClosePopup}>Close</button>
          </div>
          <div className="overlay1-OL" onClick={handleClosePopup}></div>
        </div>
      )}
    </div>
  );
};

export default PopupBoxes;

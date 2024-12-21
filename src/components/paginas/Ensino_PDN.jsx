import React, { useState } from 'react';
import '../css/css_PDN/Servicos.css';
import Infra3PDN from '../assets/Infra3PDN.jpg';

const PopupBoxes = () => {
  const [activePopup, setActivePopup] = useState(null);

  const boxes = [
    {
      id: 0,
      title: "Categorias lecionadas",
      imgSrc: Infra3PDN,
      description: ["Temos carta para Ligeiros Motociclos Cat B, A, A2 e A1"],
    },
    {
      id: 1,
      title: "Pacote",
      imgSrc: Infra3PDN,
      description: [{ title: "O que inclui?", content: ["Inscrição e Aulas de código ilimitadas","32 aulas de condução, situação real, trânsito(sem simulador)","Exame Teórico e Prático privado (escolhe o dia e hora que deseja fazer o exame)","Oferta do livro, código (mota)"] }],
    },
    {
      id: 2,
      title: "Horários",
      imgSrc: Infra3PDN,
      description: [
        { title: "Código:", content: ["2ª a 6ª às 12h, 17h, 18h, 19h", "Sábados às 10h, 11h, 12h"] },
        { title: "Condução:", content: ["2ª a 6ª das 7h às 20h", "Sábados das 7h às 13h"] },
        { title: "Secretária:", content: ["2ª a 6ª das 10h às 13h / 14.30h às 20h", "Sábados das 10h às 13h"] },
      ],
    },
    {
      id: 3,
      title: "English driving course",
      imgSrc: Infra3PDN,
      description: [
        "On Category B cards in English, the codebook is included, this translated from Portuguese to English.",
        "For category A, A1 and A2 (motorcycle) in English, we only have the book in Portuguese.",
        "For both categories in english, the medical certificate is included.",
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

    <div className="services-container1">
      <h1 className='title-services1'>Os <span>Nossos</span> Serviços</h1>
      <div className="container1">
        {boxes.map((box) => (
          <div key={box.id} className="box1" onClick={() => handleBoxClick(box.id)}>
          <div className="box-image-container1">
            <img src={box.imgSrc} alt={box.title} className="box-image1" />
            <div className="box-title-overlay1">
              <p className="box-title1">{box.title}</p>
            </div>
          </div>
        </div>
      ))}
    </div>

      {activePopup !== null && (
        <div>
          <div className="popup1">
            <h2>{boxes[activePopup].title}</h2>
            <ul>
              {boxes[activePopup].description.map((item, index) => {
                if (typeof item === "object" && item.title) {
                  return (
                    <div key={index}>
                      <p>{item.title}</p>
                      <ul>
                        {item.content.map((contentItem, contentIndex) => (
                          <li key={contentIndex}>{contentItem}</li>
                        ))}
                      </ul>
                    </div>
                  );
                } else {
                  return <li key={index}>{item}</li>;
                }
              })}
            </ul>
            <button onClick={handleClosePopup}>Close</button>
          </div>
          <div className="overlay1" onClick={handleClosePopup}></div>
        </div>
      )}
    </div>
  );
};
export default PopupBoxes;
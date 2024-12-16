import React, { useState } from 'react';
import '../css/css_PDN/Servicos.css';
import Infra3PDN from '../assets/Infra3PDN.jpg';

const PopupBoxes = () => {
  const [activePopup, setActivePopup] = useState(null);

  // Box data with titles, images, and descriptions
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
        description: [{ title: "O que inclui?", content: ["Inscrição","Aulas de código ilimitadas","32 aulas de código em situação real de trânsito(sem simulador)","Exame Teórico e Exame Prático pelo privado(vantagem de poder escolher o dia e hora que quer fazer exame)","Oferta do livro de código"] }],
      },
      {
        id: 2,
        title: "Treino a encartados",
        imgSrc: Infra3PDN,
        description: ["Volte a conduzir com confiança com as nossas aulas de treino."],
      },
      {
        id: 3,
        title: "English driving course",
        imgSrc: Infra3PDN,
        description: ["On Category B cards in English, the codebook is included, this translated from Portuguese to English.", "For category A, A1 and A2 (motorcycle) in English, we only have the book in Portuguese.","For both categories in english, the medical certificate is included."],
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
        {/* Boxes */}
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

      {/* Popup */}
      {activePopup !== null && (
        <div>
          <div className="popup1">
            <h2>{boxes[activePopup].title}</h2>
            <ul>
              {boxes[activePopup].description.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
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

import React, { useState } from 'react';
import '../css/css_OL/Servicos.css';
import Infra3PDN from '../assets/Infra3PDN.jpg';

const PopupBoxes = () => {
  const [activePopup, setActivePopup] = useState(null);

  // Box data with titles, images, and descriptions
  const boxes = [
    {
      id: 0,
      title: "Categorias lecionadas",
      imgSrc: Infra3PDN,
      description: ["Aqui apenas é lecionada a carta de ligeiros, categoria B"],
    },
    {
      id: 1,
      title: "Renovações de carta",
      imgSrc: Infra3PDN,
      description: ["Precisa renovar a sua carta? Entre em contacto conosco para saber quais os prazos e o que necessita para a renovação."],
    },
    {
      id: 2,
      title: "Treino a encartados",
      imgSrc: Infra3PDN,
      description: ["Volte a conduzir com confiança com as nossas aulas de treino."],
    },
    {
      id: 3,
      title: "Segundas vias e alterações",
      imgSrc: Infra3PDN,
      description: ["Tratamos da Renovação da Carta, 2ª via da Carta e Alteração de Dados (Morada, Nome);"],
    },
    {
      id: 4,
      title: "Carta em inglês",
      imgSrc: Infra3PDN,
      description: ["Nas cartas de categoria B em inglês, o livro de código está incluído, este traduzido para inglês.", "Nas cartas de categoria A, A1 e A2 (mota) em Inglês apenas possuímos o livro em português."],
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
      <h1 className='title-services1-OL'>Os <span>Nossos</span> Serviços</h1>
      <div className="container1-OL">
        {/* Boxes */}
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

      {/* Popup */}
      {activePopup !== null && (
        <div>
          <div className="popup1-OL">
            <h2>{boxes[activePopup].title}</h2>
            <ul>
              {boxes[activePopup].description.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <button onClick={handleClosePopup}>Close</button>
          </div>
          <div className="overlay1-OL" onClick={handleClosePopup}></div>
        </div>
      )}
    </div>
  );
};

export default PopupBoxes;

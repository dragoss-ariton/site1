import React, { useState } from 'react';
import '../css/css_PDN/Servicos.css';
import Infra3PDN from '../assets/Infra3PDN.jpg';
import Infra1PDN from '../assets/Infra4PDN.jpg';
import Infra2PDN from '../assets/Infra5PDN.jpg';
import frotaImagem from "../assets/FrotaPDN.jpg";

const PopupBoxes = () => {
  const [activePopup, setActivePopup] = useState(null);

  const boxes = [
    {
      id: 0,
      title: "Categorias",
      imgSrc: frotaImagem,
      description: ["Temos carta para Ligeiros Motociclos Cat B, A, A2 e A1"],
    },
    {
      id: 1,
      title: "Condições",
      imgSrc: Infra1PDN,
      description: [{ title: "O que inclui?", content: ["-Inscrição e Aulas de código ilimitadas","-32 aulas de condução, situação real, trânsito(sem simulador)","-Exame Teórico e Prático privado (escolhe o dia e hora que deseja fazer o exame) e imt","-Oferta do livro código (mota)"] }],
    },
    {
      id: 2,
      title: "Horários",
      imgSrc: Infra3PDN,
      description: [
        { title: "Código:", content: ["-2ª a 6ª às 12h, 13h, 17h, 18h, 19h", "-Sábados às 10h, 11h, 12h, 13h"] },
        { title: "Condução:", content: ["-2ª a 6ª das 7h às 21h", "-Sábados das 7h às 17h"] },
        { title: "Secretária:", content: ["-2ª a 6ª das 9.30h às 20h", "-Sábados das 10h às 13.30h"] },
      ],
    },
    {
      id: 3,
      title: "English driving course",
      imgSrc: Infra2PDN,
      description: [
        "-On Category B cards in English, the codebook is included, this translated from Portuguese to English.",
        "-For category A, A1 and A2 (motorcycle) in English, we only have the book in Portuguese.",
        "-For both categories in english, the medical certificate is included.",
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
  <body>
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
            {boxes[activePopup].description.map((item, index) => {
              if (typeof item === "object" && item.title) {
                return (
                  <div key={index}>
                    <b><p>{item.title}</p></b>
                    {item.content.map((contentItem, contentIndex) => (
                      <p key={contentIndex}>
                        {contentItem.includes("sem simulador") ? (
                          contentItem.split("sem simulador").map((part, i, arr) => (
                            <>
                              {part}
                              {i < arr.length - 1 && <b>sem simulador</b>}
                            </>
                          ))
                        ) : (
                          contentItem
                        )}
                      </p>
                    ))}
                  </div>
                );
              } else {
                return <p key={index}>{item}</p>;
              }
            })}
            <button onClick={handleClosePopup}>Close</button>
          </div>
          <div className="overlay1" onClick={handleClosePopup}></div>
        </div>
      )}
    </div>
    </body>
  );
};
export default PopupBoxes;
import React, { useState } from 'react';
import '../css/Servicos.css';
import Infra3PDN from '../assets/Infra3PDN.jpg';

const PopupBoxes = () => {
  const [activePopup, setActivePopup] = useState(null);

  // Box data with titles, images, and descriptions
  const boxes = [
    {
      id: 0,
      title: "servico 1",
      imgSrc: Infra3PDN,
      description: ["Beautiful colors", "Calm atmosphere", "Perfect for photography"],
    },
    {
      id: 1,
      title: "servico 2",
      imgSrc: Infra3PDN,
      description: ["Fresh air", "Hiking trails", "Breathtaking views"],
    },
    {
      id: 2,
      title: "servico 3",
      imgSrc: Infra3PDN,
      description: ["Tall trees", "Bird songs", "Peaceful environment"],
    },
    {
      id: 3,
      title: "servico 4",
      imgSrc: Infra3PDN,
      description: ["Waves crashing", "Soft sand", "Relaxing soundscapes"],
    },
    {
      id: 4,
      title: "servico 5",
      imgSrc: Infra3PDN,
      description: ["Golden dunes", "Clear night skies", "Adventurous vibes"],
    },
  ];

  const handleBoxClick = (boxIndex) => {
    setActivePopup(boxIndex);
  };

  const handleClosePopup = () => {
    setActivePopup(null);
  };

  return (
    <div>
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
            <img
              src={boxes[activePopup].imgSrc}
              alt={boxes[activePopup].title}
              className="popup-image1"
            />
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

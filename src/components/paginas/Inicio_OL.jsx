import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import 'boxicons/css/boxicons.min.css';
import '../css/EscolaDeConducaoB.css';

const Inicio_OL = () => {
  const [modalImage, setModalImage] = useState("");

  const handleImageClick = (imageSrc) => {
    setModalImage(imageSrc);
    document.getElementById("modal").style.display = "flex";
  };

  const closeModal = () => {
    document.getElementById("modal").style.display = "none";
  };

  return (
    <div className="main-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-text">
          <h1>Escola de condução <span className="highlight">Olivais</span></h1>
          <p>
            Welcome to our driving school! Learn with confidence and professionalism.
          </p>
          <div className="hero-buttons">
            <Button
              variant="outline-danger"
              className="hire-me-button"
              style={{ borderColor: '#00acac', color: '#00acac' }}
            >
              Vem falar connosco
            </Button>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="about-section">
        <h2>Porque escolher a nossa escola?</h2>
        <div className="about-content">
          <div className="text-container">
            <p>
              We are a dedicated team of professionals focused on providing quality driving instruction. Our goal is to make every student feel comfortable and capable on the road.
            </p>
          </div>
          <div className="imgAbout-section">
            <img src={require('../assets/images.jpeg')} alt="Our School Logo" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <h2>Services</h2>
        <div className="services">
          {/* Image Boxes with Hover Effect */}
          <div className="img-box" onClick={() => handleImageClick("waterfall-5229807_1280.jpg")}>
            <img src={require('../assets/images.jpeg')} alt="Waterfall" className="gallery-img" />
            <h3>Waterfall</h3>
          </div>
          <div className="img-box" onClick={() => handleImageClick("flowers-8830185_1280.jpg")}>
            <img src={require('../assets/images.jpeg')} alt="Flower" className="gallery-img" />
            <h3>Flower</h3>
          </div>
          <div className="img-box" onClick={() => handleImageClick("ai-generated-8876014_1280.jpg")}>
            <img src={require('../assets/images.jpeg')} alt="AI Flower" className="gallery-img" />
            <h3>AI Flower</h3>
          </div>
          <div className="img-box" onClick={() => handleImageClick("road-1072821_1280.jpg")}>
            <img src={require('../assets/images.jpeg')} alt="Nature" className="gallery-img" />
            <h3>Nature</h3>
          </div>
        </div>

        {/* Modal for expanded image */}
        <div id="modal" className="modal">
          <span id="close" className="close" onClick={closeModal}>&times;</span>
          <img id="expandedImg" className="expanded-img" src={modalImage} alt="" />
        </div>
      </section>
    </div>
  );
};

export default Inicio_OL;
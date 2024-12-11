import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { LazyLoadImage } from "react-lazy-load-image-component";
import imagem1 from "../assets/Infra1OL.jpg";
import imagem2 from "../assets/Infra2OL.jpg";
import imagem3 from "../assets/Infra3OL.jpg";
import frotaImagem from "../assets/FrotaOL.jpg"; // Substituir pelo caminho correto da imagem
import "../css/Equipa.css";
import { Link } from "react-router-dom";

const EquipaOL = () => {
  const team = {
    diretorTecnico: "Isabel Duque",
    instrutores: [
      "Alberto Lopes",
      "António Amaro",
      "António Moita",
      "Carlos Domingues",
      "Elsa Feliciano",
      "Fernando Fernandes",
      "Gonçalo Bispo",
      "Jaquelina Justino",
      "Libânio Gomes",
      "Mário Pinto",
      "Maria Pinto",
      "Rui Almeida",
      "Sandro Costa",
    ],
    administrativas: ["Graça Silva", "Luísa Lima"],
  };

  const fleet = [
    "Toyota Yaris (Gasolina e Gasóleo)",
    "Toyota Auris (Gasóleo)",
    "Peugeot Allure (Gasóleo)",
    "Renault Clio (Gasolina e GPL)",
    "Dacia Duster (Gasóleo)",
  ];

  const infrastructureImages = [imagem1, imagem2, imagem3];

  return (
    <div className="team-container">
      {/* Equipa Section */}
      <section className="team-section">
        <div className="info-box">
          <h2 className="section-title">A Nossa Equipa</h2>
          <div className="team-details">
            <h4 className="subtitle">Diretora Técnica</h4>
            <p className="list">{team.diretorTecnico}</p>
            <h4 className="subtitle">Instrutores</h4>
            <ul className="list">
              {team.instrutores.map((instrutor, index) => (
                <li key={index}>{instrutor}</li>
              ))}
            </ul>
            <h4 className="subtitle">Administrativas</h4>
            <ul className="list">
              {team.administrativas.map((administrativa, index) => (
                <li key={index}>{administrativa}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Carousel Section */}
        <div className="carousel-box">
          <h2 className="section-title">Infraestrutura</h2>
          <Swiper
            modules={[Pagination, Navigation, Autoplay]}
            pagination={{ clickable: true }}
            navigation
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            spaceBetween={20}
            slidesPerView={1}
            loop={true}
            className="swiper-container"
          >
            {infrastructureImages.map((image, index) => (
              <SwiperSlide key={index}>
                <LazyLoadImage
                  src={image}
                  alt={`Infraestrutura ${index + 1}`}
                  className="carousel-image"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Fleet Section */}
      <section className="fleet-section">
        <h2 className="section-title">A Nossa Frota</h2>
        <div className="fleet-content">
          {/* Fleet Image */}
          <div className="fleet-image">
            <LazyLoadImage
              src={frotaImagem}
              alt="Imagem da frota"
              className="fleet-image"
            />
          </div>

          {/* Fleet Details */}
          <div className="fleet-details">
            <ul className="fleet-list">
              {fleet.map((car, index) => (
                <li key={index}>{car}</li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div className="fleet-contact">
            <p className="text-white">Tire as suas dúvidas aqui</p>
            <Link to="/Contactos-OL">
              <button className="fleet-button">Ir para Contactos</button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EquipaOL;
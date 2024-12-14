import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { LazyLoadImage } from "react-lazy-load-image-component"
import imagem1 from "../assets/Infra1PDN.jpg"; // Substituir pelos caminhos reais das imagens
import imagem2 from "../assets/Infra2PDN.jpg";
import imagem3 from "../assets/Infra3PDN.jpg";
import frotaImagem from "../assets/FrotaPDN.jpg";
import "../css/css_PDN/Equipa.css"; // Estilo adicional (opcional)
import { Link } from 'react-router-dom';

const EquipaPDN = () => {
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
    administrativas: ["Conceição Bertrand", "Daniela Francisco"],
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
    <div className="team-container-PDN">
      {/* Equipa Section */}
      <section className="team-section-PDN">
        <div className="info-box-PDN">
          <h2 className="section-title-PDN">A Nossa Equipa</h2>
          <div className="team-details-PDN">
            <h4 className="subtitle-PDN">Diretora Técnica</h4>
            <p className="list-PDN">{team.diretorTecnico}</p>
            <h4 className="subtitle-PDN">Instrutores</h4>
            <ul className="list-PDN">
              {team.instrutores.map((instrutor, index) => (
                <li key={index}>{instrutor}</li>
              ))}
            </ul>
            <h4 className="subtitle-PDN">Administrativas</h4>
            <ul className="list-PDN">
              {team.administrativas.map((administrativa, index) => (
                <li key={index}>{administrativa}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Carousel Section */}
        <div className="carousel-box-PDN">
          <h2 className="section-title-PDN">Infraestrutura</h2>
          <Swiper
            modules={[Pagination, Navigation, Autoplay]}
            pagination={{ clickable: true }}
            navigation
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            spaceBetween={20}
            slidesPerView={1}
            loop={true}
            className="swiper-container-PDN"
          >
            {infrastructureImages.map((image, index) => (
              <SwiperSlide key={index}>
                <LazyLoadImage
                  src={image}
                  alt={`Infraestrutura ${index + 1}`}
                  className="carousel-image-PDN"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      <section className="fleet-section-PDN">
        <h2 className="section-title-PDN">A Nossa Frota</h2>
        <div className="fleet-content-PDN">
          {/* Fleet Image */}
          <div className="fleet-image-container-PDN">
            <LazyLoadImage
              src={frotaImagem}
              alt="Imagem da frota-PDN"
              className="fleet-image-PDN"
            />
          </div>

          {/* Fleet Details */}
          <div className="fleet-details-PDN">
            <ul className="fleet-list-PDN">
              {fleet.map((car, index) => (
                <li key={index}>{car}</li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div className="fleet-contact-PDN">
            <p className="text-white-PDN">Tire as suas dúvidas aqui</p>
            <Link to="/Contactos-PDN">
              <button className="fleet-button-PDN">Ir para Contactos</button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EquipaPDN;
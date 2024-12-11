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
import "../css/css_OL/Equipa.css";
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
    <div className="team-container-OL">
      {/* Equipa Section */}
      <section className="team-section-OL">
        <div className="info-box-OL">
          <h2 className="section-title-OL">A Nossa Equipa</h2>
          <div className="team-details-OL">
            <h4 className="subtitle-OL">Diretora Técnica</h4>
            <p className="list-OL">{team.diretorTecnico}</p>
            <h4 className="subtitle-OL">Instrutores</h4>
            <ul className="list-OL">
              {team.instrutores.map((instrutor, index) => (
                <li key={index}>{instrutor}</li>
              ))}
            </ul>
            <h4 className="subtitle-OL">Administrativas</h4>
            <ul className="list-OL">
              {team.administrativas.map((administrativa, index) => (
                <li key={index}>{administrativa}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Carousel Section */}
        <div className="carousel-box-OL">
          <h2 className="section-title-OL">Infraestrutura</h2>
          <Swiper
            modules={[Pagination, Navigation, Autoplay]}
            pagination={{ clickable: true }}
            navigation
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            spaceBetween={20}
            slidesPerView={1}
            loop={true}
            className="swiper-container-OL"
          >
            {infrastructureImages.map((image, index) => (
              <SwiperSlide key={index}>
                <LazyLoadImage
                  src={image}
                  alt={`Infraestrutura ${index + 1}`}
                  className="carousel-image-OL"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Fleet Section */}
      <section className="fleet-section-OL">
        <h2 className="section-title-OL">A Nossa Frota</h2>
        <div className="fleet-content-OL">
          {/* Fleet Image */}
          <div className="fleet-image-OL">
            <LazyLoadImage
              src={frotaImagem}
              alt="Imagem da frota-OL"
              className="fleet-image-OL"
            />
          </div>

          {/* Fleet Details */}
          <div className="fleet-details-OL">
            <ul className="fleet-list-OL">
              {fleet.map((car, index) => (
                <li key={index}>{car}</li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div className="fleet-contact-OL">
            <p className="text-white-OL">Tire as suas dúvidas aqui</p>
            <Link to="/Contactos-OL">
              <button className="fleet-button-OL">Ir para Contactos</button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EquipaOL;
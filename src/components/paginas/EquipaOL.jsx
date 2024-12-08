// src/components/PaginaDividida.jsx
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
import "../css/Equipa.css";

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
    { name: "Toyota Yaris (Gasolina e Gasóleo)", image: imagem1 },
    { name: "Toyota Auris (Gasóleo)", image: imagem2 },
    { name: "Peugeot Allure (Gasóleo)", image: imagem3 },
  ];

  const infrastructureImages = [imagem1, imagem2, imagem3];

  return (
    <div className="team-container">
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

      <section className="fleet-section">
        <h2 className="section-title">A Nossa Frota</h2>
        <Swiper
          modules={[Pagination, Navigation, Autoplay]}
          pagination={{ clickable: true }}
          navigation
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          className="swiper-container"
        >
          {fleet.map((car, index) => (
            <SwiperSlide key={index}>
              <LazyLoadImage
                src={car.image}
                alt={car.name}
                className="carousel-image"
              />
              <p className="car-name">{car.name}</p>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </div>
  );
};

export default EquipaOL;
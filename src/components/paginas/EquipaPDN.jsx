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

      <section className="fleet-section flex items-center justify-between">
      <div className="fleet-content flex w-full gap-8">
        {/* Primeira parte: Imagem da frota */}
        <div className="fleet-image w-1/3">
          <LazyLoadImage
            src={frotaImagem}
            alt="Imagem da frota"
            className="fleet-image w-full"
          />
        </div>

        {/* Segunda parte: Detalhes da frota */}
        <div className="fleet-details w-1/3">
          <h2 className="section-title div2 text-3xl text-blue-500">A Nossa Frota</h2>
          <ul className="fleet-list list-disc pl-5">
            {fleet.map((car, index) => (
              <li key={index}>{car}</li>
            ))}
          </ul>
        </div>

        {/* Terceira parte: Seção de contato */}
        <div className="fleet-contact w-1/3">
          <p className="text-white">Tire as suas dúvidas aqui</p>
          <Link to="/Contactos-PDN">
            <button className="bg-blue text-black px-6 py-2 rounded">
              Ir para Contactos
            </button>
          </Link>
        </div>
      </div>
    </section>
    </div>
  );
};

export default EquipaPDN;
// src/components/PaginaDividida.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react"; // Importa componentes do Swiper
import { Pagination, Navigation, Autoplay } from "swiper/modules"; // Inclui o módulo Autoplay
import "swiper/css"; // Estilos básicos do Swiper
import "swiper/css/effect-fade"; // Estilos do efeito fade
import "swiper/css/pagination"; // Estilos opcionais de paginação
import "swiper/css/navigation"; // Estilos opcionais de navegação
import { LazyLoadImage } from "react-lazy-load-image-component";
import imagem1 from "../assets/Infra1OL.jpg";
import imagem2 from "../assets/Infra2OL.jpg";
import imagem3 from "../assets/Infra3OL.jpg";
import "../css/Equipa.css"; // Estilo adicional (opcional)

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
    <div className="team1">

      <section>
        <div className="Div1">
          <ul>
            <h2>A Nossa Equipa</h2>
            <h4 className="font-bold Spc">Diretora Técnica</h4>
            <li>{team.diretorTecnico}</li>
            <h4 className="font-bold Spc">Instrutores</h4>
            <ul className="list-disc pl-5">
              {team.instrutores.map((instrutor, index) => (
                <li key={index}>{instrutor}</li>
              ))}
            </ul>
            <h4 className="font-bold Spc">Administrativas</h4>
            <ul className="list-disc pl-5">
              {team.administrativas.map((administrativa, index) => (
                <li key={index}>{administrativa}</li>
              ))}
            </ul>
            <h4 className="font-bold Spc">A nossa Frota</h4>
            <ul className="list-disc pl-5">
              {fleet.map((car, index) => (
                <li key={index}>{car}</li>
              ))}
            </ul>
          </ul>
        </div>

        <div className="Div2">
          <h2 className="section-header">Infraestrutura</h2>
          <Swiper
            modules={[Pagination, Navigation, Autoplay]} // Inclui Autoplay
            pagination={{ clickable: true }}
            navigation
            autoplay={{
              delay: 3000, // Tempo entre transições (em milissegundos)
              disableOnInteraction: false, // Continua o autoplay mesmo com interação do usuário
            }}
            spaceBetween={20}
            slidesPerView={1}
            loop={true}
            className="my-swiper"
          >
            {infrastructureImages.map((image, index) => (
              <SwiperSlide key={index}>
                <LazyLoadImage
                  src={image}
                  alt={`Infraestrutura ${index + 1}`}
                  className="img1"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </div>
  );
};

export default EquipaOL;
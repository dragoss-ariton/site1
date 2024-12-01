// src/components/PaginaDividida.jsx
import React from "react";
import imagem1 from "../assets/Infra1PDN.jpg"; // Substituir pelos caminhos reais das imagens
import imagem2 from "../assets/Infra2PDN.jpg";
import imagem3 from "../assets/Infra3PDN.jpg";
import "../css/Equipa.css"; // Estilo adicional (opcional)
import videoTeamOL from '../assets/video_bg_pdn.mp4';
import { LazyLoadImage } from "react-lazy-load-image-component";

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
    administrativas: ["Conceição Bertrand", "Daniela Francisco"],
  };

  const fleet = [
    "Toyota Yaris (Gasolina e Gasóleo)",
    "Toyota Auris (Gasóleo)",
    "Peugeot Allure (Gasóleo)",
    "Renault Clio (Gasolina e GPL)",
    "Dacia Duster (Gasóleo)",
  ];

  const infrastructureImages = [
    imagem2,
    imagem1,
    imagem3,
  ];

  return (
    <div className="team1">
      <video src={videoTeamOL} autoPlay loop muted></video>
      <section>
        <div className="Div1">
          <ul>
              <h2>A Nossa Equipa</h2>
            <h4 className="font-bold Spc">Diretora Técnica</h4>
              <li>
                {team.diretorTecnico}
              </li>
            <h4 className="font-bold Spc">Instrutores</h4>
              <li className="list-disc pl-5">
                {team.instrutores.map((instrutor, index) => (
                  <li key={index}>{instrutor}</li>
                ))}
              </li>
            <h4 className="font-bold Spc">Administrativas</h4>
              <li className="list-disc pl-5">
                {team.administrativas.map((administrativa, index) => (
                  <li key={index}>{administrativa}</li>
                ))}
              </li>
            <h4 className="font-bold Spc">A nossa Frota</h4>
              <li className="list-disc pl-5">
                {fleet.map((car, index) => (
                  <li key={index}>{car}</li>
                ))}
              </li>
          </ul>
        </div>
        
        <div className="Div2">
          <h2 className="section-header">Infraestrutura</h2>
          <div className="space-y-6">
            {infrastructureImages.slice(0, 3).map((image, index) => (
              <div key={index} className="flex justify-end">
                <LazyLoadImage
                  src={image}
                  alt={`Infraestrutura ${index + 1}`}
                  className="img1" // Classe aplicada para o estilo da imagem
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default EquipaOL;
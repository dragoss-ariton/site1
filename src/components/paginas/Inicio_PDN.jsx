import React from 'react';
import { Button } from 'react-bootstrap';
import 'boxicons/css/boxicons.min.css';
import '../css/css_PDN/home.css';
import '../css/css_PDN/servicos_home.css';
import '../css/css_PDN/aboutUs.css';
import { Link } from 'react-router-dom';
import img from '../assets/logoPDN.jpeg';
import videobg from '../assets/video_bg_pdn.mp4';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen, faUsers, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Inicio_PDN = () => {
  return (
    <div className="main-page">
      {/* Background Video */}
      <video src={videobg} autoPlay loop muted playsInline controls={false}></video>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-text">
          <h1>Escola de condução <span className="highlight">Parque Das Nações</span></h1>
          <p>
            Seja bem vindo à nossa Escola!
          </p>
          <Button
            variant="outline-danger"
            className="hire-me-button"
            as={Link}
            to="/Contactos-PDN"
            style={{ borderColor: '#00acac', color: '#00acac' }}
          >
            Venha falar connosco
          </Button>
        </div>
      </section>

      {/* Services Section */}
      <section className="services_section" id="services_section">
        <div className="title_services">
          <h1>Os <span>Nossos</span> Serviços</h1>
        </div>
        <div className="services">
          <div className="services_card">
            <FontAwesomeIcon icon={faBookOpen} className="icon" />
            <h1>Ensino</h1>
            <div className="services_content">
              <p>Descubra os serviços e categorias de carta que pode tirar na nossa escola!</p>
              <Button
                variant="outline-info"
                className="button_services"
                as={Link}
                to="/Ensino-PDN"
                style={{ borderColor: '#00acac', color: '#00acac' }}
              >
                Veja Mais
              </Button>
            </div>
          </div>
          <div className="services_card">
            <FontAwesomeIcon icon={faUsers} className="icon" />
            <h1>Equipa</h1>
            <div className="services_content">
              <p>Venha conhecer a nossa equipa e as infraestruturas que temos ao seu dispor!</p>
              <Button
                variant="outline-info"
                className="button_services"
                as={Link}
                to="/Equipa-PDN"
                style={{ borderColor: '#00acac', color: '#00acac' }}
              >
                Veja Mais
              </Button>
            </div>
          </div>
          <div className="services_card">
            <FontAwesomeIcon icon={faEnvelope} className="icon" />
            <h1>Entre Em Contacto</h1>
            <div className="services_content">
              <p>Para mais informações sinta-se à vontade de entrar em contacto connosco!</p>
              <Button
                variant="outline-info"
                className="button_services"
                as={Link}
                to="/Contactos-PDN"
                style={{ borderColor: '#00acac', color: '#00acac' }}
              >
                Veja Mais
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="about" id="about">
        <h1 className="heading"><span>Sobre</span> Nós</h1>
        <div className="row">
          <div className="image">
            <img src={img} alt="Logo" />
          </div>
          <div className="content">
            <h3>Dedicados a Excelência</h3>
            <p>A nossa escola de condução oferece formação de alta qualidade com foco na segurança e no profissionalismo.</p>
            <h3>Instrutores Experientes</h3>
            <p>Aprenda com instrutores certificados e experientes que priorizam a sua experiência de aprendizagem.</p>
            <h3>Formação Abrangente</h3>
            <p>Oferecemos aulas abrangentes adaptadas às suas necessidades, garantindo que está devidamente preparado para a estrada.</p>
            <h3>Multiplas Línguas</h3>
            <p>A nossa escola oferece a possibilidade de fazer a carta em Inglês.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Inicio_PDN;

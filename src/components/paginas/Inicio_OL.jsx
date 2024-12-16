import React from 'react';
import { Button } from 'react-bootstrap';
import 'boxicons/css/boxicons.min.css';
import '../css/css_OL/home.css';
import '../css/css_OL/servicos_home.css';
import '../css/css_OL/aboutUs.css';
import { Link } from 'react-router-dom';
import img from '../assets/logoOL.jpeg';
import videobg from '../assets/EquipaOL.mp4';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGaugeHigh } from '@fortawesome/free-solid-svg-icons';

const Inicio_OL = () => {
  return (
    <div className="main-page-OL">
      {/* Background Video */}
      <video src={videobg} autoPlay loop muted></video>

      {/* Hero Section */}
      <section className="hero-section-OL">
        <div className="hero-text-OL">
          <h1>Escola de condução <span className="highlight-OL">Olivais</span></h1>
          <p>
            Seja bem vindo à nossa Escola!
          </p>
          <Button
            variant="outline-danger"
            className="hire-me-button-OL"
            as={Link}
            to="/Contactos-OL"
            style={{ borderColor: '#00acac', color: '#00acac' }}
          >
            Venha falar connosco
          </Button>
        </div>
      </section>

      {/* Services Section */}
      <section className="services_section-OL" id="services_section">
        <div className="title_services-OL">
          <h1>Os <span>Nossos</span> Serviços</h1>
        </div>
        <div className="services-OL">
          <div className="services_card-OL">
            <FontAwesomeIcon icon={faGaugeHigh} className="icon-OL" />
            <h1>Ensino</h1>
            <div className="services_content-OL">
              <p>Descubra os serviços e categorias de carta que pode tirar na nossa escola!</p>
              <Button
                variant="outline-info"
                className="button_services-OL"
                as={Link}
                to="/Ensino-OL"
                style={{ borderColor: '#00acac', color: '#00acac' }}
              >
                Veja Mais
              </Button>
            </div>
          </div>
          <div className="services_card-OL">
            <FontAwesomeIcon icon={faGaugeHigh} className="icon-OL" />
            <h1>Equipa</h1>
            <div className="services_content-OL">
              <p>Venha conhecer a nossa equipa e as infraestruturas que temos ao seu dispor!</p>
              <Button
                variant="outline-info"
                className="button_services-OL"
                as={Link}
                to="/Equipa-OL"
                style={{ borderColor: '#00acac', color: '#00acac' }}
              >
                Veja Mais
              </Button>
            </div>
          </div>
          <div className="services_card-OL">
            <FontAwesomeIcon icon={faGaugeHigh} className="icon-OL" />
            <h1>Entre Em Contacto</h1>
            <div className="services_content-OL">
              <p>Para mais informações sinta-se à vontade de entrar em contacto connosco!</p>
              <Button
                variant="outline-info"
                className="button_services-OL"
                as={Link}
                to="/Contactos-OL"
                style={{ borderColor: '#00acac', color: '#00acac' }}
              >
                Veja Mais
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="about-OL" id="about">
        <h1 className="heading-OL"><span>Sobre</span> Nós</h1>
        <div className="row-OL">
          <div className="image-OL">
            <img src={img} alt="Logo-OL" />
          </div>
          <div className="content-OL">
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

export default Inicio_OL;
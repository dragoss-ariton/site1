import React from 'react';
import { Button } from 'react-bootstrap';
import 'boxicons/css/boxicons.min.css';
import '../css/home.css';
import '../css/servicos_home.css';
import '../css/aboutUs.css'
import { Link } from 'react-router-dom';
import img from '../assets/images.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGaugeHigh } from '@fortawesome/free-solid-svg-icons';

const Inicio_PND = () => {
  return (
    <div className="main-page">
      {/* Hero Section starts */}
      <section className="hero-section">
        <div className="hero-text">
          <h1>Escola de condução <span className="highlight">Parque das Nações</span></h1>
          <p>
            Welcome to our driving school! Learn with confidence and professionalism.
          </p>
          <div className="hero-buttons">
            <Button
              variant="outline-danger"
              className="hire-me-button"
              style={{ borderColor: '#00acac', color: '#00acac' }}
              as={Link}
              to="/Contactos-PDN"
            >
              Vem falar connosco
            </Button>
          </div>
        </div>
      </section>
      {/* Hero Section ends */}
      
      {/* About Us Section starts */}
      <section className="about" id="about">
        <h1 className="heading"><span>About</span> Us</h1>
        <div className="row">
          <div className="image">
            <img src={img} alt="About Us" />
          </div>
          <div className="content">
            <h3>Dedicated to Excellence</h3>
            <p>Our driving school offers top-quality training with a focus on safety and professionalism.</p>
            <h3>Experienced Instructors</h3>
            <p>Learn from certified and experienced instructors who prioritize your learning experience.</p>
            <h3>Comprehensive Training</h3>
            <p>We provide comprehensive lessons tailored to your needs, ensuring you're road-ready.</p>
            <h3>Flexible Scheduling</h3>
            <p>Our schedules are designed to fit your busy lifestyle, making learning convenient.</p>
          </div>
        </div>
      </section>
      {/* About Us Section ends */}

      {/* Services Section starts */}
      <section className="services_section" id="services_section">
        <div className="title_services">
          <h1>Os <span>Nossos</span> Serviços</h1>
        </div>
        <div className="services">
          <div className="services_card">
            <FontAwesomeIcon icon={faGaugeHigh} className="icon" />
            <h1>High-Speed Training</h1>
            <div className="services_content">
              <p>Master advanced driving skills for high-speed scenarios with expert guidance.</p>
              <a className="button_services" href="/">Read More</a>
            </div>
          </div>
          <div className="services_card">
            <FontAwesomeIcon icon={faGaugeHigh} className="icon" />
            <h1>Beginner Courses</h1>
            <div className="services_content">
              <p>Perfect for new drivers, these courses provide foundational knowledge and skills.</p>
              <a className="button_services" href="/">Read More</a>
            </div>
          </div>
          <div className="services_card">
            <FontAwesomeIcon icon={faGaugeHigh} className="icon" />
            <h1>Defensive Driving</h1>
            <div className="services_content">
              <p>Learn defensive techniques to stay safe in any driving condition.</p>
              <a className="button_services" href="/">Read More</a>
            </div>
          </div>
        </div>
      </section>
      {/* Services Section ends */}
    </div>
  );
};

export default Inicio_PND;


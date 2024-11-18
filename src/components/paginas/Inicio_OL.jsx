import React from 'react';
import { Button } from 'react-bootstrap';
import 'boxicons/css/boxicons.min.css';
import '../css/home.css';
import { Link } from 'react-router-dom';
import img from '../assets/images.jpeg'

const Inicio_OL = () => {
  return (
    <div className="main-page">
      {/* Hero Section starts*/}
      <section className="hero-section">
        <div className="hero-text">
          <h1>Escola de condução <span className="highlight">Olivais</span></h1>
          <p>
            Welcome to our driving school! Learn with confidence and professionalism.
          </p>
          <div className="hero-buttons">
            <Button
              variant="outline-danger"
              className="hire-me-button"
              style={{ borderColor: '#00acac', color: '#00acac' }}
              as={Link}
              to={"/Contactos-OL"}
            >
              Vem falar connosco
            </Button>
          </div>
        </div>
      </section>
      {/* Hero Section ends*/}
      {/* About Us Section starts*/}
      <section className="about" id='about'>
        <h1 className='heading'><span>about</span> us </h1>
        <div className="row">
          <div className="image">
            <img src={img} alt="" />
          </div>
          <div className='content'>
            <h3>bla bla bla niggers</h3>
            <p>sufbasoiufbsiufbiouBfuOIBFioBSFbsIUFbbOISFUbs</p>
            <h3>bla bla bla niggers</h3>
            <p>mais negros e merdas</p>
            <h3>bla bla bla niggers</h3>
            <p>mais negros e merdas</p>
            <h3>bla bla bla niggers</h3>
            <p>mais negros e merdas</p>
          </div>
        </div>
      </section>
      {/* About Us Section ends*/}

    </div>
  );
};

export default Inicio_OL;
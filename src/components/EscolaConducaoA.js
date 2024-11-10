// src/components/EscolaDeConducao.js
import React from 'react';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import './EscolaDeConducao.css'; // Adicione esta linha para estilos adicionais

const EscolaDeConducaoA = () => {
    return (
        <>
            <div class="main-content">
            {/* Main Content */}
            <Container className="my-5">
                {/* Sobre Nós Section */}
                <section id="sobre" className="py-5">
                    <h2 className="text-center">Sobre Nós (Olivais)</h2>
                    <p className="text-center">Bem-vindo à Escola de Condução Olivais! Somos especializados em formar novos condutores com segurança e excelência.</p>
                </section>

                {/* Cursos Section */}
                <section id="cursos" className="py-5 bg-light">
                    <h2 className="text-center">Cursos</h2>
                    <Row className="text-center">
                        <Col md={4} className="mb-3">
                            <h4>Categoria A</h4>
                            <p>Curso de condução para motociclos.</p>
                        </Col>
                        <Col md={4} className="mb-3">
                            <h4><a href="#categoriaB" className="text-decoration-none text-dark">Categoria B</a></h4>
                            <p>Curso de condução para veículos ligeiros.</p>
                        </Col>
                        <Col md={4} className="mb-3">
                            <h4>Reciclagem</h4>
                            <p>Aulas de atualização e reciclagem para condutores experientes.</p>
                        </Col>
                    </Row>
                </section>

                {/* Preços Section */}
                <section id="precos" className="py-5">
                    <h2 className="text-center">Preços</h2>
                    <Row className="text-center">
                        <Col md={4} className="mb-3">
                            <h4>Categoria A</h4>
                            <p>€250</p>
                        </Col>
                        <Col md={4} className="mb-3">
                            <h4>Categoria B</h4>
                            <p>€400</p>
                        </Col>
                        <Col md={4} className="mb-3">
                            <h4>Reciclagem</h4>
                            <p>€150</p>
                        </Col>
                    </Row>
                </section>

                {/* Categoria B Section */}
                <section id="categoriaB" className="py-5 bg-light">
                    <h2 className="text-center">Categoria B - Veículos Ligeiros</h2>
                    <Carousel className="mb-4">
                        <Carousel.Item>
                            <img src="car1.jpg" className="d-block w-100" alt="Carro 1" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src="car2.jpg" className="d-block w-100" alt="Carro 2" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src="car3.jpg" className="d-block w-100" alt="Carro 3" />
                        </Carousel.Item>
                    </Carousel>
                    <p className="text-center">O curso de condução para veículos ligeiros da Categoria B é desenvolvido para preparar condutores seguros e confiantes. Nossos veículos modernos proporcionam uma experiência de aprendizado prática e eficaz.</p>
                </section>

                {/* Contactos Section */}
                <section id="contactos" className="py-5">
                    <h2 className="text-center">Contactos</h2>
                    <p className="text-center">Telefone: +351 123 456 789</p>
                    <p className="text-center">Email: info@escoladeconducaorotunda.pt</p>
                    <p className="text-center">Endereço: Rua da Rotunda, 123, Lisboa</p>
                </section>
            </Container>
            </div>
            {/* Footer */}
            <footer className="bg-dark text-white text-center py-3">
                <p>&copy; 2024 Escola de Condução Rotunda. Todos os direitos reservados.</p>
            </footer>
        </>
    );
};

export default EscolaDeConducaoA;
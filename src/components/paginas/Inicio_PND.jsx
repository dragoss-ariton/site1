import React from 'react';
import { Button } from 'react-bootstrap';
import '../css/EscolaDeConducaoB.css'; // Certifique-se de que o ficheiro CSS está importado

const Inicio_PND = () => {
    return (
        <>
            <div className="main-content">
                {/* Hero Section */}
                <section id="heroB" className="hero-section">
                    <div className="hero-section-content">
                        <h1 className="display-4">Escola de Condução Parque Das Nações</h1>
                        <p className="lead">Formação segura e de excelência para novos condutores</p>
                        <Button
                            variant="primary"
                            href="#cursos"
                            size="lg"
                            className="custom-button"
                        >
                            Veja Nossos Cursos
                        </Button>
                    </div>
                </section>

                {/* Main Content */}
                <div className="content-sections">
                    {/* Exemplo de seções de conteúdo */}
                </div>
            </div>

            {/* Footer */}
            <footer className="bg-black text-white text-center py-3">
                <p>&copy; 2024 Escola de Condução Parque Das Nações. Todos os direitos reservados.</p>
            </footer>
        </>
    );
};

export default Inicio_PND;
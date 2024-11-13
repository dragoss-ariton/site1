// src/components/EscolaDeConducaoB.js
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap'; // Import necessary components from react-bootstrap
import axios from 'axios'; // Make sure axios is installed
import '../css/EscolaDeConducaoB.css'; // Import your styles for this component

const Contactos_PND = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });
    const [statusMessage, setStatusMessage] = useState('');

    // Handle input changes
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const formDataWithSchool = {
                ...formData,
                schoolName: 'Parque das Nações', // School name for Escola B
            };

            // Send form data to backend API (make sure your API is running)
            const response = await axios.post('http://localhost:5000/api/send-email', formDataWithSchool);
            setStatusMessage(response.data.message); // Update the status message after form submission
            setFormData({ name: '', email: '', phone: '', message: '' }); // Reset form after submission
        } catch (error) {
            setStatusMessage('Erro ao enviar o formulário. Por favor, tente novamente.');
            console.error('Erro ao enviar:', error);
        }
    };

    return (
        <div className="contact-form-container">
            {/* Form Header */}
            <h3 className="text-center mt-5">Envie-nos uma Mensagem</h3>
            
            {/* Contact Form */}
            <Form onSubmit={handleSubmit} className="p-3">
                <Form.Group controlId="formName">
                    <Form.Label>Nome</Form.Label>
                    <Form.Control
                        type="text"
                        name="name"
                        placeholder="Seu nome"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>

                <Form.Group controlId="formEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="email"
                        name="email"
                        placeholder="Seu email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>

                <Form.Group controlId="formPhone">
                    <Form.Label>Telefone</Form.Label>
                    <Form.Control
                        type="tel"
                        name="phone"
                        placeholder="Seu telefone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>

                <Form.Group controlId="formMessage">
                    <Form.Label>Mensagem</Form.Label>
                    <Form.Control
                        as="textarea"
                        name="message"
                        rows={3}
                        placeholder="Sua mensagem"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>

                <Button variant="primary" type="submit" className="mt-3">Enviar</Button>

                {/* Display status message */}
                {statusMessage && <p className="mt-3 text-center">{statusMessage}</p>}
            </Form>
        </div>
    );
};

export default Contactos_PND;

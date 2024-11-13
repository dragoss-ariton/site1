import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
import '../css/Servicos.css';

const Contactos_OL = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });
    const [statusMessage, setStatusMessage] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    const validatePhone = (phone) => /^\d{9}$/.test(phone);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateEmail(formData.email)) {
            setStatusMessage('Por favor, insira um email válido.');
            return;
        }
        if (!validatePhone(formData.phone)) {
            setStatusMessage('Por favor, insira um número de telefone válido com 9 dígitos.');
            return;
        }

        setIsSubmitting(true);
        setStatusMessage('');

        try {
            const response = await axios.post('http://localhost:5000/api/send-email', formData);
            setStatusMessage(response.data.message);
            setFormData({ name: '', email: '', phone: '', message: '' });
        } catch (error) {
            setStatusMessage('Erro ao enviar o formulário. Por favor, tente novamente.');
            console.error('Erro ao enviar:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div id="heroB" className="contact-section">
            <div className="hero-section-content">
                <h1 className="servicos-title">Queres saber mais informações?</h1>
                <h1 className="servicos-subtitle">Envia nos uma mensagem, que entraremos em contacto consigo o mais depressa possível!</h1>
                <div className="contact-form-container">
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="formName" className="contact-form-group">
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

                        <Form.Group controlId="formEmail" className="contact-form-group">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                name="email"
                                placeholder="Seu email"
                                value={formData.email}
                                onChange={handleChange}
                                isInvalid={formData.email && !validateEmail(formData.email)}
                                required
                            />
                            <Form.Control.Feedback type="invalid">
                                Insira um email válido.
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group controlId="formPhone" className="contact-form-group">
                            <Form.Label>Telefone</Form.Label>
                            <Form.Control
                                type="tel"
                                name="phone"
                                placeholder="Seu telefone"
                                value={formData.phone}
                                onChange={handleChange}
                                isInvalid={formData.phone && !validatePhone(formData.phone)}
                                required
                            />
                            <Form.Control.Feedback type="invalid">
                                Insira um número de telefone válido com 9 dígitos.
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group controlId="formMessage" className="contact-form-group">
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

                        <Button variant="primary" type="submit" className="mt-3" disabled={isSubmitting}>
                            {isSubmitting ? 'Enviando...' : 'Enviar'}
                        </Button>
                    </Form>

                    {statusMessage && <p className="status-message">{statusMessage}</p>}
                </div>
            </div>
        </div>
    );
};

export default Contactos_OL;
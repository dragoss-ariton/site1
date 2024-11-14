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
        schoolName: 'Olivais',
    });
    const [statusMessage, setStatusMessage] = useState('');
    const [statusType, setStatusType] = useState(''); // Added statusType for success/error
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
            setStatusType('error'); // Set to error if email is invalid
            return;
        }
        if (!validatePhone(formData.phone)) {
            setStatusMessage('Por favor, insira um número de telefone válido com 9 dígitos.');
            setStatusType('error'); // Set to error if phone is invalid
            return;
        }

        setIsSubmitting(true);
        setStatusMessage('');
        setStatusType(''); // Reset statusType before making request

        try {

            const response = await axios.post('http://localhost:5000/api/send-email', formData);
            setStatusMessage(response.data.message);
            setStatusType('success'); // Set to success if the email was sent successfully
        } catch (error) {
            setStatusMessage('Erro ao enviar o formulário. Por favor, tente novamente.');
            setStatusType('error'); // Set to error if there was a problem sending the email
            console.error('Erro ao enviar:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div id="heroB" className="contact-section">
            <div className="contact-info-container">
                {/* Form Section */}
                <div className="contact-form-container">
                    <h1 className="contacte-nos-title">Queres saber mais informações?</h1>
                    <h2 className="contacte-nos-subtitle">
                        Envia-nos uma mensagem, que entraremos em contacto consigo o mais depressa possível!
                    </h2>
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

                        <div className="form-actions">
                            <Button variant="dark" type="submit" className="mt-3" disabled={isSubmitting}>
                                {isSubmitting ? 'Enviando...' : 'Enviar'}
                            </Button>
                            {/* Status message to the right of the button */}
                            {statusMessage && (
                                <p className={`status-message ${statusType}`}>
                                    {statusMessage}
                                </p>
                            )}
                        </div>
                    </Form>
                </div>

                {/* Contact Info Section */}
                <div className="contact-info">
                    <h2 style={{ marginTop: '30px' }}>Contactos</h2>
                    <div className="contact-details">
                        <p><strong>Telemóvel 1:</strong> +351 912 345 678</p>
                        <p><strong>Telemóvel 2:</strong> +351 987 654 321</p>
                        <p><strong>Email:</strong> contacto@exemplo.com</p>
                    </div>
                    <h2>Onde nos encontrar</h2>
                    <p><strong>Morada:</strong> Rua Exemplo, 123, Lisboa, Portugal</p>
                    <div className="google-map">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.464384983726!2d-9.139336284685038!3d38.7168044796017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd193478b1234567%3A0x123456789abcdef!2sExemplo+Localização!5e0!3m2!1spt-PT!2spt!4v1600000000000!5m2!1spt-PT!2spt"
                            width="100%"
                            height="400"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            title="Localização no Google Maps"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contactos_OL;

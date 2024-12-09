import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
import '../css/contact.css';

const Contactos_PDN = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
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
        <section id="contact-section">
            <div className="container">
                <div className="content-wrapper">
                    <div className="form-container">
                        <h1 className="title">Queres saber mais informações?</h1>
                        <p className="subtitle">Envia-nos uma mensagem, que entraremos em contacto consigo o mais depressa possível!</p>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group controlId="formName" className="form-group">
                                <Form.Label>Nome</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="name"
                                    placeholder="nome"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </Form.Group>

                            <Form.Group controlId="formEmail" className="form-group">
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    type="email"
                                    name="email"
                                    placeholder="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    isInvalid={formData.email && !validateEmail(formData.email)}
                                    required
                                />
                                <Form.Control.Feedback type="invalid">
                                    Insira um email válido.
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group controlId="formPhone" className="form-group">
                                <Form.Label>Telefone</Form.Label>
                                <Form.Control
                                    type="tel"
                                    name="phone"
                                    placeholder="telefone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    isInvalid={formData.phone && !validatePhone(formData.phone)}
                                    required
                                />
                                <Form.Control.Feedback type="invalid">
                                    Insira um número de telefone válido com 9 dígitos.
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group controlId="formMessage" className="form-group">
                                <Form.Label>Mensagem</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    name="message"
                                    rows={4}
                                    placeholder="mensagem"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                />
                            </Form.Group>

                            <Button variant="primary" type="submit" className="submit-btn" disabled={isSubmitting}>
                                {isSubmitting ? 'A Enviar...' : 'Enviar'}
                            </Button>

                            {statusMessage && (
                                <div className={`status-message ${statusType}`}>
                                    {statusMessage}
                                </div>
                            )}
                        </Form>
                    </div>

                    <div className="info-container">
                        <h2>Contactos</h2>
                        <p><strong>Fixo:</strong> 218 949 011</p>
                        <p><strong>Telemóvel:</strong> 915 195 646</p>
                        <p><strong>Email:</strong> ec.parquedasnacoes@gmail.com</p>

                        <h2>Onde nos encontrar</h2>
                        <p><strong>Morada:</strong> Passeio das Fragatas N°3A loja 4, 1990-615 Lisboa</p>
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d777.6216634465918!2d-9.096490930343142!3d38.77547664376794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd19318c711cdb87%3A0xe7088e0294289300!2zRXNjb2xhIGRlIENvbmR1w6fDo28gUGFycXVlIGRhcyBOYcOnw7Vlcw!5e0!3m2!1spt-PT!2spt!4v1733760815125!5m2!1spt-PT!2spt"
                            width="100%"
                            height="400"
                            frameBorder="0"
                            allowFullScreen
                            title="Localização no Google Maps"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contactos_PDN;

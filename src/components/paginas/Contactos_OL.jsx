import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import emailjs from 'emailjs-com';
import '../css/css_OL/contact.css';

const Contactos_OL = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
        schoolName: 'Olivais',
    });
    const [statusMessage, setStatusMessage] = useState('');
    const [statusType, setStatusType] = useState('');
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
            setStatusType('error');
            return;
        }
        if (!validatePhone(formData.phone)) {
            setStatusMessage('Por favor, insira um número de telefone válido com 9 dígitos.');
            setStatusType('error');
            return;
        }

        setIsSubmitting(true);
        setStatusMessage('');
        setStatusType('');

        try {
            await emailjs.send(
                'service_javegmm', // Seu Service ID
                'template_ulw69m4', // Seu Template ID
                {
                    name: formData.name,
                    email: formData.email,
                    phone: formData.phone,
                    message: formData.message,
                    schoolName: formData.schoolName,
                    schoolEmail: 'ec.olivais@gmail.com'
                },
                '7rX5-PFXYt6FsgQNs' // Sua Public Key
            );
            setStatusMessage('Mensagem enviada com sucesso!');
            setStatusType('success');
        } catch (error) {
            console.error('Erro ao enviar mensagem:', error.text || error);
            setStatusMessage('Erro ao enviar o formulário. Por favor, tente novamente.');
            setStatusType('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact-section-OL">
            <div className="container-OL">
                <div className="content-wrapper-OL">
                    <div className="form-container-OL">
                        <h1 className="title-OL">Queres saber mais informações?</h1>
                        <p className="subtitle-OL">Envia-nos uma mensagem, que entraremos em contacto consigo o mais depressa possível!</p>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group controlId="formName" className="form-group-OL">
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

                            <Form.Group controlId="formEmail" className="form-group-OL">
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

                            <Form.Group controlId="formPhone" className="form-group-OL">
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

                            <Form.Group controlId="formMessage" className="form-group-OL">
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

                            <Button variant="primary" type="submit" className="submit-btn-OL" disabled={isSubmitting}>
                                {isSubmitting ? 'A Enviar...' : 'Enviar'}
                            </Button>

                            {statusMessage && (
                                <div className={`status-message ${statusType}`}>
                                    {statusMessage}
                                </div>
                            )}
                        </Form>
                    </div>

                    <div className="info-container-OL">
                        <h2>Contactos</h2>
                        <p><strong>Fixo:</strong> 211 588 274</p>
                        <p><strong>Telemóvel 2:</strong> 936 533 485</p>
                        <p><strong>Email:</strong> ec.olivais@gmail.com</p>

                        <h2>Onde nos encontrar</h2>
                        <p><strong>Morada:</strong> Av.Cidade Luanda N5 B, 1B. 1800-096 Lisboa</p>
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1555.419673838899!2d-9.111102943504827!3d38.7673885929086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd19322f81a7b9cb%3A0x55005c8f8f815a3e!2sEscola%20de%20Condu%C3%A7%C3%A3o%20dos%20Olivais!5e0!3m2!1spt-PT!2spt!4v1731600899533!5m2!1spt-PT!2spt"
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

export default Contactos_OL;

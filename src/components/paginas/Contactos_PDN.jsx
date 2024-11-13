import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap'; // Import necessary components from react-bootstrap
import axios from 'axios'; // Make sure axios is installed
import '../css/Servicos.css'; // Import your styles for this component

const Contactos_PND = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });
    const [statusMessage, setStatusMessage] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false); // State to control button disable status

    // Handle input changes
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const validatePhone = (phone) => {
        const phoneRegex = /^\d{9}$/;
        return phoneRegex.test(phone);
    };

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
        setStatusMessage(''); // Clear status message on new submission

        try {
            const response = await axios.post('http://localhost:5000/api/send-email', formData);
            setStatusMessage(response.data.message);
            setFormData({ name: '', email: '', phone: '', message: '' });
        } catch (error) {
            setStatusMessage('Erro ao enviar o formulário. Por favor, tente novamente.');
            console.error('Erro ao enviar:', error);
        } finally {
            setIsSubmitting(false); // Re-enable the button after the request is complete
        }
    };

    return (
        <div className="contact-form-container">
            <h3 className="text-center mt-5">Envie-nos uma Mensagem</h3>
            
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
                        isInvalid={formData.email && !validateEmail(formData.email)}
                        required
                    />
                    <Form.Control.Feedback type="invalid">
                        Insira um email válido.
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="formPhone">
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

                <Button variant="primary" type="submit" className="mt-3" disabled={isSubmitting}>
                    {isSubmitting ? 'Enviando...' : 'Enviar'}
                </Button>

                {statusMessage && <p className="mt-3 text-center">{statusMessage}</p>}
            </Form>
        </div>
    );
};

export default Contactos_PND;
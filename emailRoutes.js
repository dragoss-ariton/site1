// emailRoutes.js
const express = require('express');
const nodemailer = require('nodemailer');
const router = express.Router();

router.post('/send-email', async (req, res) => {
  const { name, email, phone, message, schoolName } = req.body;

  // Configuração do NodeMailer
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'ec.contacto.alunos@gmail.com', // Seu e-mail Gmail
      pass: 'guti ehgx bior hskt', // Sua senha ou app password
    },
  });

  // E-mail para o utilizador
  const userMailOptions = {
    from: 'ec.contacto.alunos@gmail.com',
    to: email,
    subject: 'Confirmação de Recebimento',
    text: `Olá, ${name}!\n\nObrigado pelo seu contato! Recebemos a sua mensagem e vamos responder em breve.\n\nDetalhes:\nNome: ${name}\nE-mail: ${email}\nTelefone: ${phone}\nMensagem: ${message}\n\nCumprimentos,\nEscola de Condução ${schoolName}`,
  };

  // E-mail para a escola (dependendo da escola que enviou o formulário)
  let schoolEmail = '';
  if (schoolName === 'Olivais') {
    schoolEmail = 'miguelbferreira5@gmail.com';  // E-mail de Olivais
  } else {
    schoolEmail = 'true.lalander@gmail.com'; // E-mail do Parque das Nações
  }

  const schoolMailOptions = {
    from: 'ec.contacto.alunos@gmail.com',
    to: schoolEmail,  // Endereço de e-mail da escola específica
    subject: 'Novo Contato Recebido',
    text: `Novo contato recebido no site.\n\nDetalhes:\nNome: ${name}\nE-mail: ${email}\nTelefone: ${phone}\nMensagem: ${message}`,
  };

  try {
    // Envia e-mail para o utilizador
    await transporter.sendMail(userMailOptions);
    // Envia e-mail para a escola
    await transporter.sendMail(schoolMailOptions);

    res.status(200).json({ message: 'A sua mensagem foi enviada!' });
  } catch (error) {
    console.error('Erro ao enviar e-mail:', error);
    res.status(500).json({ error: 'Erro ao enviar a mensagem.' });
  }
});

module.exports = router;

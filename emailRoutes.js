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
    from: 'ec.contacto.alunos@gmail',
    to: email,
    subject: 'Confirmação de Recebimento',
    text: `Olá, ${name}!\n\nObrigado pelo seu contato! Recebemos a sua mensagem e vamos responder em breve.\n\nDetalhes:\nNome: ${name}\nE-mail: ${email}\nTelefone: ${phone}\nMensagem: ${message}\n\nCumprimentos,\nEscola de Condução ${schoolName}`,
  };

  // E-mail para a escola (dependendo da escola que enviou o formulário)
  let schoolEmail = '';
  if (schoolName === 'Olivais') {
    schoolEmail = 'miguelbferreira5@gmail.com';  // E-mail da Escola A
  } else if (schoolName === 'Parque das Nações') {
    schoolEmail = 'true.lalander@gmail.com'; // E-mail da Escola B
  }

  const schoolMailOptions = {
    from: 'ec.contacto.alunos@gmail',
    to: schoolEmail,  // Endereço de e-mail da escola específica
    subject: 'Novo Contato Recebido',
    text: `Novo contato recebido no site.\n\nDetalhes:\nNome: ${name}\nE-mail: ${email}\nTelefone: ${phone}\nMensagem: ${message}`,
  };

  try {
    // Envia e-mail para o utilizador
    await transporter.sendMail(userMailOptions);
    // Envia e-mail para a escola
    await transporter.sendMail(schoolMailOptions);

    res.status(200).json({ message: 'E-mails enviados com sucesso!' });
  } catch (error) {
    console.error('Erro ao enviar e-mail:', error);
    res.status(500).json({ error: 'Erro ao enviar e-mail.' });
  }
});

module.exports = router;

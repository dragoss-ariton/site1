// server.js
const express = require('express');
const cors = require('cors');
const emailRoutes = require('./emailRoutes'); // Rotas do NodeMailer

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Configurar a rota de envio de e-mails
app.use('/api', emailRoutes);

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

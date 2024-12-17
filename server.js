const express = require('express');
const cors = require('cors');
const path = require('path');
const emailRoutes = require('./emailRoutes'); // Rotas do NodeMailer

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Configurar a rota de envio de e-mails
app.use('/api', emailRoutes);

// Servir arquivos estáticos do React
app.use(express.static(path.join(__dirname, 'build')));

// Redirecionar todas as outras requisições para o React
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

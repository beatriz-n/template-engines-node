const express = require('express');
const path = require('path');
const nunjucks = require('nunjucks'); // Importa o Nunjucks
const db = require('../database/databaseconfig'); // Importa a configuração do banco de dados
require('dotenv').config(); // Carrega variáveis de ambiente do arquivo .env

const app = express();
const PORT = 26000;

// Configura Nunjucks como motor de template
nunjucks.configure(path.join(__dirname, 'views'), { // Ajuste aqui para o caminho correto
  autoescape: true,
  express: app,
});

// Define o motor de visualização
app.set('view engine', 'njk');

// Rota para a página inicial
app.get('/', (req, res) => {
  res.render('index', { title: 'Página Inicial' }); // Passa a variável title para a view
});

// Rota para a página de manutenção das salas de aula
app.get('/manutSalaDeAula', async (req, res) => {
  try {
    // Consulta ao banco de dados para obter salas de aula
    const result = await db.query('SELECT * FROM salasdeaula WHERE removido = false');
    res.render('manutSalaDeAula', { salas: result.rows }); // Passa os dados para a view
  } catch (err) {
    console.error(err);
    res.status(500).send('Erro ao consultar o banco de dados.');
  }
});

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor Nunjucks rodando em http://localhost:${PORT}`);
  console.log('DB_USER:', process.env.DB_USER);
  console.log('DB_PASSWORD:', process.env.DB_PASSWORD);

});

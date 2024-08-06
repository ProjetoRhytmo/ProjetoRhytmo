const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Configurar o middleware para servir arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Configurar o middleware para análise do corpo da solicitação
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Configurar o mecanismo de visualização
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Importar e usar rotas
const userRoutes = require('./routes/userRoutes');
const songRoutes = require('./routes/songRoutes');

app.use('/users', userRoutes);
app.use('/songs', songRoutes);

// Rota principal
app.get('/', (req, res) => {
  res.render('index');
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;

// Configurações do Body Parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Configurações do EJS
app.set('view engine', 'ejs');

// Rotas
const userRoutes = require('./routes/UserRoutes');
const songRoutes = require('./routes/SongRoutes');

app.use('/users', userRoutes);
app.use('/songs', songRoutes);

// Página inicial
app.get('/', (req, res) => {
  res.render('index');
});

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
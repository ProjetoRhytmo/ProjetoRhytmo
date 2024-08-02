const { Pool } = require('pg');

const pool = new Pool({
  user: 'seu_usuario',       // Usuário do PostgreSQL
  host: 'localhost',         // Endereço do servidor
  database: 'mymusicapp',    // Nome do banco de dados
  password: 'sua_senha',     // Senha do usuário
  port: 5432,                // Porta do PostgreSQL
});

module.exports = pool;

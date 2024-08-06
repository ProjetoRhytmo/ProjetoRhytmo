const pool = require('../db');

exports.authenticate = (username, password) => {
  return new Promise((resolve, reject) => {
    const query = 'SELECT * FROM users WHERE username = $1 AND password = $2';
    pool.query(query, [username, password], (error, results) => {
      if (error) {
        return reject(error);
      }
      if (results.rows.length > 0) {
        resolve(results.rows[0]);
      } else {
        reject('Invalid credentials');
      }
    });
  });
};
// Defina suas interações com o banco de dados para músicas aqui
// Exemplo: exports.getAllSongs = () => { /* ... */ };
const userModel = require('../models/userModel');

exports.showLogin = (req, res) => {
  res.render('login');
};

exports.login = (req, res) => {
  const { username, password } = req.body;
  userModel.authenticate(username, password)
    .then(user => {
      res.redirect('/dashboard');
    })
    .catch(err => {
      res.status(401).send('Login failed');
    });
};
// Crie funções para lidar com as músicas aqui
// Exemplo: exports.listSongs = (req, res) => { /* ... */ };

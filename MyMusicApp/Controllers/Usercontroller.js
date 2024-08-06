const userModel = require('../models/UserModel');

exports.showLogin = (req, res) => {
  res.render('login', { title: 'Login' });
};

exports.login = (req, res) => {
  const { username, password } = req.body;
  userModel.authenticate(username, password)
    .then(user => {
      res.render('dashboard', { title: 'Dashboard', user });
    })
    .catch(err => {
      res.status(401).send('Login failed');
    });
};
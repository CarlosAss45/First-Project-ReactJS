const express = require('express');
const UserController = require('../controllers/UserController')

const routes = express.Router();

// Cadastrar
routes.post('/register', UserController.store);

// Rota de autenticação
// router.post('/authenticate')

module.exports = routes;

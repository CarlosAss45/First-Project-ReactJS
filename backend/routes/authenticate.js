const express = require('express');
const AuthController = require('../controllers/AuthController')

const routes = express.Router();

routes.post('/autenticar', AuthController.auth)

module.exports = routes
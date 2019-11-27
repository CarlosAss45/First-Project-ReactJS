const express = require('express');
const ProjectController = require('../controllers/ProjectController')

const routes = express.Router();

routes.get('/projetos', ProjectController.dale)

module.exports = routes
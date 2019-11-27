const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authMiddleware = require('./middlewares/auth');

const usuarios = require('./routes/user');
const authenticate = require('./routes/authenticate');
const projetos = require('./routes/project.js')

const server = express();

mongoose.connect('mongodb+srv://admin:theduel456@cluster0-jiqss.mongodb.net/omnistack8?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true

});

server.use(cors());
server.use(express.json());
server.use(usuarios);
server.use(authenticate);
server.use(authMiddleware);
server.use(projetos);


server.listen(3333)
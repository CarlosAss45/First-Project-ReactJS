// const axios = require('axios');
const Usuario = require('../models/Usuario');
const jwt = require('jsonwebtoken');

const authConfig = require('../config/auth')

module.exports = {
    async store(req, res) {
        const { nome, email, senha } = req.body;

        const userExists = await Usuario.findOne({ email: email });

        if(userExists){
            return res.json(userExists);
        }

        const user = await Usuario.create({
            nome: nome,
            email: email,
            senha: senha
        })

        user.senha = undefined;

        const token = jwt.sign({ id: user.id }, authConfig.secret, {
            expiresIn: 86400,
        })

        return res.json({user, token})
    }
};

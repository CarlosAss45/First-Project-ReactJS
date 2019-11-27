const Usuario = require('../models/Usuario');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const authConfig = require('../config/auth')

module.exports = {
    async auth(req, res) {
        const { email, senha } = req.body;

        const user = await Usuario.findOne({ email }).select('+senha')

        if(!user){
            return res.status(400).send({ error: 'User not found' })
        }

        if(!await bcrypt.compare(senha, user.senha)){
            return res.status(400).send({ error: 'Invalid password' });
        }

        user.senha = undefined;

        // Gerar token
        const token = jwt.sign({ id: user.id }, authConfig.secret, {
            expiresIn: 86400,
        })

        res.send({ user, token });
    }
}
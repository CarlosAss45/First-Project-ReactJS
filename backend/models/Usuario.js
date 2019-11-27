const { Schema, model } = require('mongoose');
const bcrypt = require('bcryptjs')

const UsuarioSchema = new Schema ({
    nome: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    senha: {
        type: String,
        required: true,
        select: false
    }
}, {
    timestamps: true
})

UsuarioSchema.pre('save', async function(next) {
    const hash = await bcrypt.hash(this.senha, 10);
    this.senha = hash;

    next()
})

module.exports = model('Usuario', UsuarioSchema);
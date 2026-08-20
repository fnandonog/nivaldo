// Requerer somente o método DataTypes do Sequelize
const { DataTypes } = require('sequelize');

// Requerer a conexão com o banco (Caminho corrigido!)
const conn = require('../db/conn');

// Definir o model user
const User = conn.define('users', {
    nome: {
        type: DataTypes.STRING,
        required: true
    },
    email: {
        type: DataTypes.STRING,
        required: true
    },
    password: {
        type: DataTypes.STRING,
        required: true
    },
    image: {
        type: DataTypes.STRING,
    },
    phone: {
        type: DataTypes.STRING,
        required: true
    }
});

// Exportar o model para ser reconhecido pelo server.js
module.exports = User;
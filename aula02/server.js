//requere o express
const express = require('express');
//instancia do express
const api = express();
//requerer o cors
const cors = require('cors');
//requerer a conexao
const conn = require('./db/conn');
//requerer o model user
const User = require('./models/users');

//Configurando JSON response (com os parênteses corrigidos!)
api.use(express.json());

//salve cors
api.use(cors({ credentials: true, origin: 'http://localhost:5000' }));

//start api e conecta ao banco
conn.sync()
    .then(() => {
        // Colocamos o console.log dentro do listen para garantir que subiu
        api.listen(3030, () => {
            console.log('Banco de dados conectado com sucesso!');
            console.log('Servidor Inicializado na porta 3030');
        });
    })
    .catch((error) => {
        console.info('Erro ao conectar no banco de dados:', error);
    });
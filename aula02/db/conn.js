//requerer o siquelize
const Sequelize = require('sequelize')

//parametros de conexão
const conn = new Sequelize(
    'db_aula_teste',
    'root',
    '174590',{
        host:'localhost',
        dialect:'mysql',
        port:3306
    }
)
    
try {
    conn.authenticate()
    console.info('Banco de Dados conectado com sucesso!')
} catch (error) {
    console.info(`Não foi possivel conectar ao banco:,${error}`)
}

module.exports = conn
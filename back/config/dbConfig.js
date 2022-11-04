// Importar biblioteca
const Sequelize = require('sequelize'); // Vai receber o sequelize

// Conectar com banco de dados
const database = new Sequelize('sesi','root','',{
    dialect: 'mysql',
    host:'localhost',
    port: 3307,
});

// Exportar módulo
module.exports = database;

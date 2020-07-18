// CONEXAO COM BANCO
const Sequelize = require ('sequelize');
const dbConfig = require ('../Config/dataBase')

const Usuario = require('../models/Usuario');
const Produto = require('../models/Produto')
const ProdutoEstoque = require('../models/ProdutoEstoque')
const Venda = require('../models/Venda')
const connection = new Sequelize(dbConfig);

Usuario.init(connection)
Produto.init(connection)
ProdutoEstoque.init(connection)
Venda.init(connection)


ProdutoEstoque.associar(connection.models)
Produto.associar(connection.models)
Venda.associar(connection.models)





module.exports = connection;
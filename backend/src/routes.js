const express = require('express');
const { request } = require('express');
const UserController = require('./Controllers/UserController')
const ProdutoController = require ('./Controllers/ProdutoController')
const ProdutoEstoqueController = require ('./Controllers/ProdutoEstoqueController')
const VendaController = require('./Controllers/VendaController')
const routes = express.Router()

routes.post('/users', UserController.criarUsuario)

routes.get('/users', UserController.retornaTodosUsuario)
routes.get('/users/:id', UserController.retornaUsuario)

routes.post('/produto', ProdutoController.criarProduto)

routes.get('/produtos', ProdutoController.retornaTodosProdutos)
routes.get('/produto/:id', ProdutoController.retornaProduto)

routes.post('/produto/:produto_id/produtoestoque', ProdutoEstoqueController.criarProdutoEstoque)
routes.get('/produto/:produto_id/produtoestoque', ProdutoEstoqueController.buscaEstoqueProduto)

routes.post('/venda', VendaController.criarVenda)
module.exports = routes
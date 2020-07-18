const Produto = require("../models/Produto");

module.exports = {
    async criarProduto(req,res){
      
        const{nome,preco_venda} = req.body;
        const produtoCriado = await Produto.create({nome,preco_venda});
        return res.json(produtoCriado)
    },
    async retornaTodosProdutos(req,res){
        const produtos = await Produto.findAll(); 
        return res.json(produtos)
    },
    async retornaProduto(req,res){
        console.log(req)
        const id = req.params.id
        const produtoUnico = await Produto.findByPk(id)
        return res.json(produtoUnico)
    }
    


}
const Venda = require("../models/Venda");
const ProdutoEstoque =  require("../models/ProdutoEstoque");
const ProdutoEstoqueController = require('../Controllers/ProdutoEstoqueController')

//ANALISAR COMO VAI FUNCIONAR A VENDA
module.exports = {
    async criarVenda(req,res){
        const{desconto,desconto_maquina} = req.body;
        valorTotal = 100

        const vendaCriada = await Venda.create({
            desconto,
            desconto_maquina,
            valorTotal
        });
        let {id_produto,quantidade_venda} = req.body
        quantidade_venda = parseInt(quantidade_venda)

        const produtoEstoque = await ProdutoEstoqueController.buscaEstoqueProduto(id_produto)
       
        if (!produtoEstoque){ //VER SE PRECISA
            return res.status(400).json({error: 'Esse produto não possui estoque'})
        }

        produtoEstoque.dataValues.produtoestoque.map((auxProdutoEstoque)=>{
           if (auxProdutoEstoque.dataValues.quantidade >=quantidade_venda ){
            auxProdutoEstoque.dataValues.quantidade -= quantidade_venda
           }
           auxProdutoEstoque.save()
           
           try {
            vendaCriada.addProdutoestoque(auxProdutoEstoque)
           } catch (error) {
              
           } 
        }) 
             
        
      
        return res.json(vendaCriada)
        
    }
    
}
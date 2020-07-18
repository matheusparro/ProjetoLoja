const ProdutoEstoque = require("../models/ProdutoEstoque");
const Produto = require("../models/Produto");
const { where } = require("sequelize");
const { Op } = require("sequelize");
module.exports = {
    async criarProdutoEstoque(req,res){
        const {produto_id}  = req.params
        const{preco_custo,quantidade} = req.body;

        
        const produto = await Produto.findByPk(produto_id)
        if (!produto){
            return res.status(400).json({error: 'User not found'})
        }

        const [produtoEstoqueCriado,created] = await ProdutoEstoque.findOrCreate({
            where:{
                produto_id:produto_id 
            },
            defaults:{
                produto_id: produto_id,
                quantidade: quantidade,
                preco_custo:preco_custo
            }
        })   
        if (!created){
            produtoEstoqueCriado.quantidade +=quantidade 
            produtoEstoqueCriado.preco_custo =  (produtoEstoqueCriado.preco_custo + preco_custo)/2
            produtoEstoqueCriado.save()

        }

        
        
    
        return res.json(produtoEstoqueCriado)
    },
    //BUSCAR ESTOQUE PARA VENDA
    
    async buscaEstoqueProduto(produto_id){
      
        console.log(produto_id)
        const produto = await Produto.findByPk(produto_id,{
            include: {
                association:'produtoestoque',
                limit: 1,
                where:{                    
                    quantidade:{ [Op.gt]: [0]}, 

                }
        }

        })
        return produto
    }


    
}
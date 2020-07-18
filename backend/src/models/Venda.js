const {Model, DataTypes} = require ('sequelize')

class Venda extends Model{
    static init(connection){
        super.init({
            desconto: DataTypes.FLOAT,
            desconto_maquina: DataTypes.FLOAT,
            valorTotal: DataTypes.FLOAT,
        }, {
            sequelize: connection
        })
       
 
    }
    // static associar(models){
    //     this.hasMany(models.ProdutoEstoque, {foreignKey: 'produto_estoque_id',as:'produto_estoque'})
    // }

    static associar(models){
        this.belongsToMany(models.ProdutoEstoque, {foreignKey: 'id_venda', as:'produtoestoque',through:'VendaProduto'})
    }
   
}

module.exports = Venda
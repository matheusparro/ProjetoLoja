const {Model, DataTypes} = require ('sequelize')

class ProdutoEstoque extends Model{
    static init(connection){
        super.init({
            
            preco_custo: DataTypes.FLOAT,
            quantidade: DataTypes.INTEGER,
        }, {
            sequelize: connection
        })
       
 
    }
    static associar(models){
        this.belongsTo(models.Produto, {foreignKey: 'produto_id',as:'produto'})

        this.belongsToMany(models.Venda,{foreignKey: 'produto_estoque_id',through:"VendaProduto"})
    }
   
}
module.exports = ProdutoEstoque



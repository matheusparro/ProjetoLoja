const {Model, DataTypes} = require ('sequelize')

class Produto extends Model{
    static init(connection){
        super.init({
            nome: DataTypes.STRING,
            preco_venda: DataTypes.FLOAT,
        }, {
            sequelize: connection
        })
       
 
    }
    static associar(models){
        this.hasMany(models.ProdutoEstoque, {foreignKey: 'produto_id',as:'produtoestoque'})
    }
   
}
module.exports = Produto



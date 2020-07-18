const {Model, DataTypes} = require ('sequelize')

class Usuario extends Model{
    static init(connection){
        super.init({
            nome: DataTypes.STRING,
            senha: DataTypes.STRING,
        }, {
            sequelize: connection
        })
       
 
    }
   
}

module.exports = Usuario
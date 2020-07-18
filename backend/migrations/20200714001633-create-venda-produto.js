'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
     await queryInterface.createTable('VendaProduto', {
        id: {
          type: Sequelize.INTEGER,
          primarayKey:true,
          autoIncrement:true,
          allownull: false,
          unique:true,
        },
       
        id_venda:{
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {model:'Venda',key:'id'},
          onUpdate:'CASCADE',
          onDelete:'CASCADE',
        },
        produto_estoque_id:{
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {model:'ProdutoEstoque',key:'id'},
          onUpdate:'CASCADE',
          onDelete:'CASCADE',
        },
        created_at:{
          type: Sequelize.DATE,
          allowNull: false,
        },
        updated_at:{
          type: Sequelize.DATE,
          allowNull:false,
        }
     });
     
  },

  down: async (queryInterface, Sequelize) => {
   
     await queryInterface.dropTable('VendaProduto');
     
  }
};

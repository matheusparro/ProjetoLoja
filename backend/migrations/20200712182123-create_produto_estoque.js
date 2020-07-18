'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
     await queryInterface.createTable('ProdutoEstoque', {
        id: {
          type: Sequelize.INTEGER,
          primarayKey:true,
          autoIncrement:true,
          allownull: false,
          unique:true,
        },
        produto_id:{
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {model:'Produto',key:'id'},
          onUpdate:'CASCADE',
          onDelete:'CASCADE',
        },
        preco_custo:{
          type: Sequelize.FLOAT,
          allowNull: false,
        },
        quantidade:{
          type: Sequelize.INTEGER,
          allowNull: false,
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
   
     await queryInterface.dropTable('ProdutoEstoque');
     
  }
};

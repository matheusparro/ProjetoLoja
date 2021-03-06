'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
     await queryInterface.createTable('Produto', {
        id: {
          type: Sequelize.INTEGER,
          primarayKey:true,
          autoIncrement:true,
          allownull: false,
          unique:true,
        },
        nome:{
          type: Sequelize.STRING,
          allowNull: false,
          
        },
        preco_venda:{
          type: Sequelize.FLOAT,
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
   
     await queryInterface.dropTable('Produto');
     
  }
};

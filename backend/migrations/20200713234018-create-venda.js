'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
     await queryInterface.createTable('Venda', {
        id: {
          type: Sequelize.INTEGER,
          primarayKey:true,
          autoIncrement:true,
          allownull: false,
          unique:true,
        },
        desconto:{
          type: Sequelize.FLOAT,
          allowNull: false,
        },
        desconto_maquina:{
          type: Sequelize.FLOAT,
          allowNull: false,
        },
        valor_total:{
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
   
     await queryInterface.dropTable('Venda');
     
  }
};

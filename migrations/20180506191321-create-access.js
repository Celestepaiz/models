'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('accesses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      modelo: {
        type: Sequelize.INTEGER
      },
      marca: {
        type: Sequelize.STRING(30)
      },
      placas: {
        type: Sequelize.STRING(7)
      },
      codigo: {
        type: Sequelize.STRING(10)
      },
      id_user: {
        type: Sequelize.STRING(24)
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('accesses');
  }
};
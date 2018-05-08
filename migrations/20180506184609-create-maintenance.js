'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('maintenances', {
            id: {
              allowNull: false,
              autoIncrement: true,
              primaryKey: true,
              type: Sequelize.INTEGER
            },
            concepto: {
              type: Sequelize.STRING
            },
            monto: {
              type: Sequelize.NUMERIC(5,2)
              },
              fecha_limite: {
                type: Sequelize.DATE
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
          return queryInterface.dropTable('maintenances');
        }
    };
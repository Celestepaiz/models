'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('payments', {
            id: {
              allowNull: false,
              autoIncrement: true,
              primaryKey: true,
              type: Sequelize.INTEGER
            },
            folio: {
              type: Sequelize.STRING(7)
            },
            fecha_mant: {
              type: Sequelize.DATE
            },
            calle: {
              type: Sequelize.STRING(30)
            },
            numero: {
              type: Sequelize.INTEGER
            },
            concepto: {
              type: Sequelize.STRING(30)
            },
            monto: {
              type: Sequelize.NUMERIC(5,2)
              },
              nombre: {
                type: Sequelize.STRING(30)
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
          return queryInterface.dropTable('payments');
        }
    };
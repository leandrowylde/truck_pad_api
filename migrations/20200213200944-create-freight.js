"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("freights", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      origin: {
        type: Sequelize.STRING,
        allowNull: false
      },
      destination: {
        type: Sequelize.STRING,
        allowNull: false
      },
      latitude_origin: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      longitude_origin: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      latitude_destination: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      longitude_destination: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      has_load_to_origin: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      check_in_date: {
        type: Sequelize.DATE,
        allowNull: false,
        validate: {
          notEmpty: true
        }
      },
      driver_id: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: "drivers"
          },
          key: "id"
        },
        allowNull: false
      },
      truck_id: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: "trucks"
          },
          key: "id"
        },
        allowNull: false
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("freights");
  }
};

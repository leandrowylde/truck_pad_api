"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "truck_types",
      [
        {
          int_code: "1",
          truck_type: "Caminhão 3/4",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          int_code: "2",
          truck_type: "Caminhão Toco",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          int_code: "3",
          truck_type: "Caminhão Truck",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          int_code: "4",
          truck_type: "Carreta Simples",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          int_code: "5",
          truck_type: "Caminhão Eixo Extendido",
          created_at: new Date(),
          updated_at: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("TruckTypes", null, {});
  }
};

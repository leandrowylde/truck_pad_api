"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "trucks",
      [
        {
          plate: "HGF-9746",
          model: "Truck model",
          brand: "Truck brand",
          truck_type_id: 1,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          plate: "LJU-1234",
          model: "Truck model 2",
          brand: "Truck brand 2",
          truck_type_id: 2,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          plate: "NHY-9875",
          model: "Truck model 3",
          brand: "Truck brand 3",
          truck_type_id: 3,
          created_at: new Date(),
          updated_at: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Truck", null, {});
  }
};

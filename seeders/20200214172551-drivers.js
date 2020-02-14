"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "drivers",
      [
        {
          name: "Test Driver",
          age: "29",
          gender: "M",
          has_own_vehicle: true,
          cnh_type: "E",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: "Test Driver 2",
          age: "35",
          gender: "M",
          has_own_vehicle: false,
          cnh_type: "D",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: "Test Driver 3",
          age: "25",
          gender: "F",
          has_own_vehicle: true,
          cnh_type: "E",
          created_at: new Date(),
          updated_at: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Driver", null, {});
  }
};

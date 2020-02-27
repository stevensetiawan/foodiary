'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      return queryInterface.bulkInsert('Restaurants', 
      [
        {
            name: 'Kebab BabaisMe',
            address: "PIM",
            phone: '0217777553',
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
          name: 'Mi Nta lagi',
          address: "dimana",
          phone: '0217777555',
          createdAt: new Date(),
          updatedAt: new Date(),
      },
      {
        name: 'Bakso Duda',
        address: "sebelah Hacktiv8",
        phone: '021777666',
        createdAt: new Date(),
        updatedAt: new Date(),
    }
      ], {});
    },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
     return queryInterface.bulkDelete('Restaurants', null, {});
  }
};

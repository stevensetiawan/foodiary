'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      return queryInterface.bulkInsert('Food', 
      [
        {
            name: 'Nasi Goreng',
            calories: 333,
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
          name: 'Mie Ayam',
          calories: 421,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Bakso',
          calories: 325,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Sate Ayam',
          calories: 681,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Soto Ayam',
          calories: 321,
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
     return queryInterface.bulkDelete('Food', null, {});
  }
};

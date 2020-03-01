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
            image: '/nasi goreng.jpeg'
        },
        {
          name: 'Mie Ayam',
          calories: 421,
          createdAt: new Date(),
          updatedAt: new Date(),
          image: '/mie-ayam.jpg'
        },
        {
          name: 'Bakso',
          calories: 325,
          createdAt: new Date(),
          updatedAt: new Date(),
          image: '/bakso.jpg'
        },
        {
          name: 'Sate Ayam',
          calories: 681,
          createdAt: new Date(),
          updatedAt: new Date(),
          image: '/sate-ayam.jpg'
        },
        {
          name: 'Soto Ayam',
          calories: 321,
          createdAt: new Date(),
          updatedAt: new Date(),
          image: '/soto-ayam.jpeg'
        },
        {
          name: 'Ketoprak',
          calories: 402,
          createdAt: new Date(),
          updatedAt: new Date(),
          image: '/ketoprak.jpeg'
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

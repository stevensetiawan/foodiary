'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
      Example:
      */
      return queryInterface.bulkInsert('FoodRestaurants', 
      [
        {
            FoodId: 1 ,
            RestaurantId: 2,
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
          FoodId: 2 ,
          RestaurantId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          FoodId: 3 ,
          RestaurantId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          FoodId: 4 ,
          RestaurantId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          FoodId: 5 ,
          RestaurantId: 4,
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
     return queryInterface.bulkDelete('FoodRestaurants', null, {});
  }
}

  

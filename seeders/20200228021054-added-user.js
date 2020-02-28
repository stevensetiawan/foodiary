'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
      Example:
      */
      return queryInterface.bulkInsert('Users', 
      [
        {
            first_name: 'Steven',
            last_name: "Setiawan",
            email: 'steven.setiawan.94@gmail.com',
            password: 'apaaja',
            role:'admin',
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
          first_name: 'Adhiyatma',
          last_name: 'Pramayoga',
          email: 'adhiyatma.pramayoga@gmail.com',
          password: 'apaaja',
          role:'user',
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
     return queryInterface.bulkDelete('Users', null, {});
  }
}

  

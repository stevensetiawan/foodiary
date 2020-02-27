'use strict';
module.exports = (sequelize, DataTypes) => {
  const models = sequelize.Sequelize.Model

  class Restaurant extends models{

  }
  Restaurant.init(
    {
      name: DataTypes.STRING,
      address: DataTypes.STRING,
      phone: DataTypes.INTEGER
    }, {sequelize}
  )
  // const Restaurant = sequelize.define('Restaurant', {
  //   name: DataTypes.STRING,
  //   address: DataTypes.STRING,
  //   phone: DataTypes.INTEGER
  // }, {});
  Restaurant.associate = function(models) {
    // associations can be defined here
    Restaurant.belongsToMany(models.Food, {through: models.FoodRestaurant}) 

  };
  return Restaurant;
}; 
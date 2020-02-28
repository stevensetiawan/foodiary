'use strict';
module.exports = (sequelize, DataTypes) => {
  const FoodRestaurant = sequelize.define('FoodRestaurant', {
    FoodId: DataTypes.INTEGER,
    RestaurantId: DataTypes.INTEGER
  }, {});
  FoodRestaurant.associate = function(models) {
    // associations can be defined here
    FoodRestaurant.belongsTo(models.Food, {foreignKey: 'FoodId'});
    FoodRestaurant.belongsTo(models.Restaurant, {foreignKey: 'RestaurantId'})
  };
  return FoodRestaurant;
}; 
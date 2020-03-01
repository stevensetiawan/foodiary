'use strict';
module.exports = (sequelize, DataTypes) => {

  const Sequelize = sequelize.Sequelize;
  const Model = Sequelize.Model;

  class Food extends Model {}
  Food.init({
    name: {
      type: DataTypes.STRING,
      allowNull : false,
      validate : {
        notNull : true,
        isEmpty: function(value) {
          if(!value) {
            throw new Error ('Please input the food name')
          }
        }
      }
    },
    calories: {
      type: DataTypes.INTEGER,
      validate: {
        isEmpty: function(value) {
          if(!value){
            throw new Error ('Please input the calories of the food')
          }
        }
      }
    },
    image: DataTypes.STRING
  }, { sequelize })

  Food.associate = function(models) {
    // associations can be defined here
    Food.hasMany(models.UserFood, {foreignKey: 'FoodId'})
    Food.hasMany(models.FoodRestaurant, {foreignKey: 'FoodId'})
    // Food.belongsToMany(models.Restaurant, {through: models.FoodRestaurant}) 
  };
  return Food;
};
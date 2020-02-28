'use strict';
module.exports = (sequelize, DataTypes) => {

  const Sequelize = sequelize.Sequelize;
  const Model = Sequelize.Model;
  
  class UserFood extends Model{}

  UserFood.init({
    UserId: DataTypes.INTEGER,
    FoodId: DataTypes.INTEGER
  }, { sequelize })

  
  UserFood.associate = function(models) {
    // associations can be defined here
    UserFood.belongsTo(models.Food, {foreignKey: 'FoodId'});
    UserFood.belongsTo(models.User, {foreignKey: 'UserId'})
  };
  return UserFood;
};
'use strict';
module.exports = (sequelize, DataTypes) => {

  const Sequelize = sequelize.Sequelize;
  const Model = Sequelize.Model;
  const bcrypt = require('bcrypt');

  class User extends Model{
    getFullName(){
      return `${this.first_name} ${this.last_name}`
    }
  }

  User.init({
    first_name: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        isEmpty: function(value) {
          if(!value) {
            throw new Error ('Please input your name')
          }
        }
      }
    },
    last_name: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      }
    },
    password: DataTypes.STRING,
    role: DataTypes.STRING
  }, { 
    hooks: {
      beforeSave: (instance, options) => {
        return bcrypt.hash(instance.password, 8)
        .then(function(hash) {
          // Store hash in your password DB.
          instance.password = hash
        });
        }
    },
    sequelize 
  })

  User.associate = function(models) {
    // associations can be defined here
    User.hasMany(models.UserFood, {foreignKey: 'UserId'})
  };
  return User;
};
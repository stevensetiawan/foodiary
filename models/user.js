'use strict';
module.exports = (sequelize, DataTypes) => {

  const Sequelize = sequelize.Sequelize;
  const Model = Sequelize.Model;
  const bcrypt = require('bcrypt');

  class User extends Model{}

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
        isEmailUnique: function (value) {
          let check = false;
          User.findAll({where: {email: value}})
          .then(data => {
            if(data.length !== 0) {
              check = true
            }
            if(check){
              throw new Error ('Email has been used')
            }
          })
        }
      }
    },
    password: DataTypes.STRING,
    role: DataTypes.STRING
  }, { 
    hooks: {
      afterValidate: (instance, options) => {
        bcrypt.hash(instance.password, 10, function(err, hash) {
          if(err){
            console.log(err)
          }
          instance.password = hash
        });
      }
    },
    sequelize 
  })

  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};
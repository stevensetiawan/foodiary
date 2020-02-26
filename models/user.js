'use strict';
module.exports = (sequelize, DataTypes) => {

  const Sequelize = sequelize.Sequelize;
  const Model = Sequelize.Model;

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
  }, { sequelize })

  // var User = sequelize.define('User', {
  //   first_name: DataTypes.STRING,
  //   last_name: DataTypes.STRING,
  //   email: DataTypes.STRING,
  //   password: DataTypes.STRING,
  //   role: DataTypes.STRING
  // }, {});
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};
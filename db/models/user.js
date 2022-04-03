'use strict';
module.exports = (sequelize, DataTypes) => {
  var user = sequelize.define('User', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    birthdayDate: DataTypes.STRING,
    location: DataTypes.STRING
  }, {});
  return user;
};
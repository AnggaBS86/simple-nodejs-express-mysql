'use strict';
module.exports = (sequelize, DataTypes) => {
  var user = sequelize.define('User', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    birthday_date: DataTypes.STRING,
    location: DataTypes.STRING
  }, {underscored: true});
  return user;
};
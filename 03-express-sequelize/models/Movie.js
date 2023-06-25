const {Sequelize, DataTypes} = require('sequelize');
const sequelize = require('../config/db');

const Movie = sequelize.define('movie', {
  title: {
    type: DataTypes.STRING
  },
  year: {
    type: DataTypes.NUMBER
  }
}, {
  freezeTableName: true,
  timestamps: false
})

module.exports = Movie
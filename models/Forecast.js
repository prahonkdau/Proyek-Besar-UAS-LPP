const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');


const Forecast = sequelize.define('Forecast', {
name: DataTypes.STRING
});


module.exports = Forecast;
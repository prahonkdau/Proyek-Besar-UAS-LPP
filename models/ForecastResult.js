const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');


const ForecastResult = sequelize.define('ForecastResult', {
month: DataTypes.INTEGER,
normalValue: DataTypes.FLOAT,
seasonalValue: DataTypes.FLOAT
});


module.exports = ForecastResult;
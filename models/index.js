const sequelize = require('../config/database');
const Forecast = require('./Forecast');
const ForecastResult = require('./ForecastResult');


Forecast.hasMany(ForecastResult);
ForecastResult.belongsTo(Forecast);


sequelize.sync();


module.exports = { Forecast, ForecastResult };
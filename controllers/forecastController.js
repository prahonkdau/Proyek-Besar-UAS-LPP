const SeasonalForecast = require("../services/forecastService");

exports.showForm = (req, res) => {
  res.render("form");
};

exports.processForecast = (req, res) => {
  const sales = req.body.sales.split(",").map(Number);
  const seasonal = req.body.seasonal.split(",").map(Number);
  const months = parseInt(req.body.months);

  const model = new SeasonalForecast(sales, seasonal);
  const results = model.forecast(months);

  const labels = results.map((_, i) => `Bulan ${i + 1}`);
  const normalForecast = results.map(r => r.normal);
  const seasonalForecast = results.map(r => r.seasonal);

  res.render("result", {
    results,
    labels,
    normalForecast,
    seasonalForecast
  });
};

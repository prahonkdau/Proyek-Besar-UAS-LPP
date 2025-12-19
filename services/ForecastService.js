class SeasonalForecast {
  constructor(data, seasonalIndex) {
    this.data = data;
    this.seasonalIndex = seasonalIndex;
  }

  calculateGrowthRate() {
    let rates = [];
    for (let i = 1; i < this.data.length; i++) {
      rates.push((this.data[i] - this.data[i - 1]) / this.data[i - 1]);
    }
    return rates.reduce((a, b) => a + b, 0) / rates.length;
  }

  forecast(months) {
    const avgGrowth = this.calculateGrowthRate();
    let results = [];

    for (let i = 1; i <= months; i++) {
      const base = this.data[this.data.length - 1] * Math.pow(1 + avgGrowth, i);
      results.push({
        normal: base,
        seasonal: base * (this.seasonalIndex[i - 1] || 1)
      });
    }
    return results;
  }
}

module.exports = SeasonalForecast;

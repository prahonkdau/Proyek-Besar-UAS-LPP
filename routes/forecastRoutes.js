const express = require("express");
const router = express.Router();
const controller = require("../controllers/forecastController");

router.get("/", controller.showForm);
router.post("/forecast", controller.processForecast);

module.exports = router;

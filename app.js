const express = require("express");
const path = require("path");
const expressLayouts = require("express-ejs-layouts");

const app = express();

// View engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(expressLayouts);
app.set("layout", "layout");

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// Routes
const forecastRoutes = require("./routes/forecastRoutes");
app.use("/", forecastRoutes);

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});

const express = require("express");
const cors = require("cors");
const requestController = require("./controller/weather.controller");

const app = express();
app.use(cors());

app.get("/", requestController.getCurrentWeather);

module.exports = app;

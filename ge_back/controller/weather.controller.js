const _ = require("lodash");

const emulationWeather = ["sunny", "cloudy", "rainy"];

module.exports.getCurrentWeather = async (req, res, next) => {
  try {
    const currentWheather = emulationWeather[_.random(0, 2, false)];
    return res.status(200).send({ weather: currentWheather });
  } catch (error) {
    next(error);
  }
};

export const getWeather = async () => {
  return fetch("http://localhost:5000/").then((res) => res.json());
};

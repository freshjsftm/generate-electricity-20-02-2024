import { useEffect, useState } from "react";
import "./Sky.style.css";
import { getWeather } from "../../api/getCurrentWeather";

function Sky(props) {
  const [currentWeather, setWeather] = useState("sunny");

  useEffect(() => {
    getWeather()
      .then(({ weather }) => {
        setWeather(weather);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const cn = `sky ${currentWeather}`;

  return <section className={cn}></section>;
}

export default Sky;
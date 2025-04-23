import React, { useState, useEffect } from "react";
import WeatherForecastDay from "./WeatherForecastDay";
import axios from "axios";

import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    /* Group data by date */
    const dailyData = {};

    response.data.list.forEach((item) => {
      const date = item.dt_txt.split(" ")[0]; /*e.g. "2025-04-23*/

      if (!dailyData[date]) {
        dailyData[date] = {
          temps: [],
          icon: item.weather[0].icon,
          date: item.dt,
        };
      }
      dailyData[date].temps.push(item.main.temp_min, item.main.temp_max);
    });

    const dailySummaries = Object.keys(dailyData)
      .slice(0, 6) /* next 6 days*/
      .map((date) => {
        const temps = dailyData[date].temps;
        return {
          date: date,
          icon: dailyData[date].icon,
          temp_min: Math.min(...temps),
          temp_max: Math.max(...temps),
        };
      });
    setForecast(dailySummaries);
    setLoaded(true);
  }

  useEffect(() => {
    setLoaded(false); // Reset when coordinates change
    const apiKey = "ebef9ca4a8de66ed586fac628fade056";
    const { lat, lon } = props.coordinates;
    const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
  }, [props.coordinates]);

  if (loaded) {
    console.log(forecast);
    return (
      <div className="weather-forecast-container">
        <div className="row">
          {forecast.map((day, index) => (
            <div className="col-sm-2 p-1" key={index}>
              <WeatherForecastDay data={day} />
            </div>
          ))}
        </div>
      </div>
    );
  } else {
    /*console.log(props);*/

    return "something isnt working right";
  }
}

import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";

export default function Weather() {
  const [weatherData, setWeatherData] = useState({
    ready: false,
  }); /*it has a key of READY but it FALSE by default*/

  function handleSubmit(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      date: "wednesday, 17:59",
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      city: response.data.name,
      icon: response.data.weather[0].icon,
      feels_like: response.data.main.feels_like,
      description: response.data.weather[0].description,
    });
  }
  if (weatherData.ready) {
    return (
      <div className="container">
        <h1 className="city-name">{weatherData.city}</h1>

        <div className="current-day text-capitalize">{weatherData.date}</div>

        <div className="current-weather-container">
          <div className="current-weather-block row">
            <div className="weather-icon col-sm-3">
              <img
                src={weatherData.icon}
                alt={weatherData.description}
                className="image-icon"
              />
            </div>
            <div className="weather-description col-sm-5 row">
              <h2 className="current-temperature col-sm-8">
                {Math.round(weatherData.temperature)}
              </h2>
              <div className="temperature-measurement col-sm-4">
                {" "}
                <a href="">°C</a> | <a href="">°F</a>
              </div>
            </div>

            <div className="weather-feels col-sm">
              <ul>
                <li>
                  <strong className="text-capitalize">
                    {weatherData.description}
                  </strong>
                </li>
                <li>Feels like: {Math.round(weatherData.feels_like)} °</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="physics">
          <ul className="physics-list">
            <li>Humidity: {weatherData.humidity} %</li>
            <li>Wind: {weatherData.wind} km/h</li>
          </ul>
        </div>
      </div>
    );
  } else {
    const apiKey = "ebef9ca4a8de66ed586fac628fade056";
    const city = "London";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleSubmit);

    return "Loading...";
  }
}

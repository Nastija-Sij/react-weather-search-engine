import React, { useState } from "react";
import "./Weather.css";
import WeatherForecast from "./WeatherForecast";

import WeatherInfo from "./WeatherInfo";

import axios from "axios";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({
    ready: false,
  }); /*it has a key of READY but it FALSE by default*/

  function handleResponse(response) {  
    console.log(response.data);
    setWeatherData({
      ready: true,
      date: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      city: response.data.name,
      icon: response.data.weather[0].icon,
      feels_like: response.data.main.feels_like,
      description: response.data.weather[0].description,

      coord: response.data.coord,
    });
    /*console.log("ICON CODE FROM API:", response.data.weather[0].icon);*/
  }
  function search() {
    const apiKey = "ebef9ca4a8de66ed586fac628fade056";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }
  if (weatherData.ready) {
    return (
      <div>
        <WeatherInfo
          data={weatherData}
          onSubmit={handleSubmit}
          onCityChange={handleCityChange}
        />
        <div className="forecast-section">
          <WeatherForecast coordinates={weatherData.coord} />
        </div>
      </div>
    );
  } else {
    search();

    return "Loading...";
  }
}

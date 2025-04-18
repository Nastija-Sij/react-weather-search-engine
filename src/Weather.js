import React from "react";
import "./Weather.css";
import axios from "axios";

export default function Weather() {
function handleSubmit(response) {
    console.log(response.data)
}

    const apiKey = "ebef9ca4a8de66ed586fac628fade056";
    const city= "London";
    let apiUrl =
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

      axios.get(apiUrl).then(handleSubmit);
  return (
    <div className="container">
      <h1 className="city-name">Vienna</h1>
      
        <div className="current-day ">Day, Time</div>
       
      <div className="current-weather-container">
        <div className="current-weather-block row">
          <div className="weather-icon col-sm-3">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
              alt="sunny"
              className="image-icon"
            />
          </div>
          <div className="weather-description col-sm-5 row">
            <h2 className="current-temperature col-sm-8">18</h2>
            <div className="temperature-measurement col-sm-4">
              {" "}
              <a href="">°C</a> | <a href="">°F</a>
            </div>
          </div>

          <div className="weather-feels col-sm">
            <ul>
              <li>
                <bold>Sunny</bold>
              </li>
              <li>Feels like: 7°</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="physics">
        <ul className="physics-list">
          <li>Humidity: 50%</li>
          <li>Wind: 5 km/h</li>
          <li>Percipitation: </li>
        </ul>
      </div>
    </div>
  );
}

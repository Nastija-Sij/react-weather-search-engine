import React from "react";
import FormattedDate from "./FormattedDay";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";




export default function WeatherInfo(props) {
  return (
    <div className="weather-info">
      <header className="App-header">
        <h3 className="app-title">Weather Search Engine</h3>
        <form onSubmit={props.onSubmit}>
          <input
            type="search"
            placeholder="Enter a city..."
            className="search-input"
            onChange={props.onCityChange}
          />
          <input type="submit" value="Search" className="submit-btn" />
        </form>
      </header>
      <div className="container">
        <h1 className="city-name">{props.data.city}</h1>

        <div className="current-day text-capitalize">
          <ul>
            <li>
              <FormattedDate date={props.data.date} />
            </li>
          </ul>
        </div>

        <div className="current-weather-container">
          <div className="current-weather-block row">
            <div className="weather-icon col-sm-3">
              <WeatherIcon
                code={props.data.icon}
                className="image-icon"
                size={100}
              />
            </div>

            <div className="weather-description col-sm-5 row">
              <WeatherTemperature celsius={props.data.temperature} />
            </div>

            <div className="weather-feels col-sm">
              <ul>
                <li>
                  <strong className="text-capitalize">
                    {props.data.description}
                  </strong>
                </li>
                <li>Feels like: {Math.round(props.data.feels_like)} °</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="physics">
          <ul className="physics-list">
            <li>Humidity: {props.data.humidity} %</li>
            <li>Wind: {props.data.wind} km/h</li>
          </ul>
        </div>
             
      </div>
    </div>
  );
}

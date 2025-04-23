import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay({ data }) {
  const day = new Date(data.date).toLocaleDateString("en-US", {
    weekday: "short",
  });

  return (
    <div className=" forecast-day">
      <div className="day">{day}</div>

      <WeatherIcon code={data.icon} className="forecast-icon" size={40} />

      <div className="high-low-temp justify-content-between">
        <span className="high-temp"> {Math.round(data.temp_max)}°</span>{"  "}
        <span className="low-temp"> {Math.round(data.temp_min)}°</span>
      </div>
    </div>
  );
}

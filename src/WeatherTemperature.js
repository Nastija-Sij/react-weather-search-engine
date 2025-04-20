import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function fahrenheitTemp(){
    return (props.celsius *9)/5 +32;
  }

  if (unit === "celsius") {
    return (
      <div className="row">
        <h2 className="current-temperature col-sm-8">
          {Math.round(props.celsius)}
        </h2>
        <div className="temperature-measurement col-sm-4">
          °C |{" "}
          <a href="/" onClick={showFahrenheit}>
            °F
          </a>
        </div>
      </div>
    );
  } else {
    
    return (
      <div className="row">
        <h2 className="current-temperature col-sm-8">
          {Math.round(fahrenheitTemp())}
        </h2>
        <div className="temperature-measurement col-sm-4">
          <a href="/" onClick={showCelsius}>
            °C
          </a>{" "}
          | °F
        </div>
      </div>
    );
  }
}

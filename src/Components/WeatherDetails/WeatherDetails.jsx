import React from "react";
import "./WeatherDetails.css";
import Weather from "./Weather";
import HourlyWeather from "./HourlyWeather/HourlyWeather";
import ForcastOf4Days from "./ForcastOfNext4Days/ForcastOf4Days";
const WeatherDetails = () => {
  return (
    <>
      <div className="main">
        <div className="card">
          <Weather />
          <HourlyWeather />
          <ForcastOf4Days />
        </div>
      </div>
    </>
  );
};

export default WeatherDetails;

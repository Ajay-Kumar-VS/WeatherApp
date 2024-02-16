import React from "react";
import "./WeatherCard.css";
const WeatherCard = (props) => {
  // destructing data of props
  let { UV, temp, weather, wind, time } = { ...props.hourlyData };

  //generating hours from got time from api call that was in string formate
  time = new Date(time).getHours();
  if (time > 12) {
    time = (time % 12) + "PM";
  } else if (time === 0) {
    time = "12AM";
  } else {
    time = time + "AM";
  }

  return (
    <div className="weatherCardMain">
      <div className="timeFrame">
        <div id="time">{time}</div>
      </div>

      <div className="weatherAndTemp">
        <div className="tempFrameInWeatherCard">
          <div id="tempInWeatherCard">{temp ? temp : "0"}</div>
          <div id="degreeSymolInWeatherCard">o</div>
          <div id="CInWeatherCard">C</div>
        </div>
        <div id="weatherInWeatherCard">{weather ? weather : ""}</div>
      </div>

      <div className="UVandWind">
        <div id="Uv">UV:{typeof UV === "number" ? UV : ""}</div>
        <div id="wind">Wind:{typeof wind === "number" ? wind : ""}Km/h</div>
      </div>
    </div>
  );
};

export default WeatherCard;

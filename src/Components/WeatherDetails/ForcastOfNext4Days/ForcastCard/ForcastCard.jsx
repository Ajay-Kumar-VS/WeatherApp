import React from "react";
import "./ForcastCard.css";
const ForcastCard = (prop) => {
  //destructuring data
  let { UV, temp, weather, wind, date } = { ...prop.data };

  // genrating date in weekday-date-month-year in this formate because from api call we got date in string formate
  let dateString = new Date(date);
  const options = {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
  };
  const formattedDate = dateString.toLocaleDateString("en-US", options);

  return (
    <div className="forcastmain">
      <div id="day">{formattedDate}</div>
      <div className="ForcastCardMain">
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
    </div>
  );
};

export default ForcastCard;

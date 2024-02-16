import React from "react";
import { useSelector } from "react-redux";

import "./Weather.css";
const Weather = () => {
  // getting data if currentweather deatails from redux store
  let details = useSelector((store) => {
    return store.Weather;
  });

  // destructurinng it
  let { temp, weather } = details[0].currentDayWeatherData;
  let city = details[0].cityName;
  let country = details[0].country;

  return (
    <div className="main">
      <div className="cityAndCountry">
        <div id="city">{city}</div>
        {city ? <div id="city">,</div> : ""}

        <div id="country">{country}</div>
      </div>

      <div className="tempFrame">
        <div id="temp">{temp ? (temp = Math.round(temp - 273.15)) : ""}</div>
        {temp ? (
          <div className="tempFrame">
            <div id="degreeSymbol">o</div>
            <div id="C">C</div>
          </div>
        ) : (
          ""
        )}
      </div>
      <div id="weather">{weather ? weather : ""}</div>
    </div>
  );
};

export default Weather;

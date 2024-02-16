import React, { useEffect } from "react";
import "./HourlyWeather.css";
import { useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import WeatherCard from "./WeatherCard/WeatherCard";
const HourlyWeather = () => {
  let details = useSelector((store) => {
    return store.Weather;
  });
  let hourlyForcastData = details[0].hourlyForcastData;

  useEffect(() => {
    // console.log("Main comp")
    window.scrollTo(0, 500);
  });

  if (hourlyForcastData.length === 0) {
    return;
  }
  return (
    <>
      <div className="containerOfHourForcast">
        <div className="HourForcast">Next 6 Hours Forcast Details</div>
      </div>

      <div className="hourlyForcast">
        {hourlyForcastData.map((hourlyData) => {
          return <WeatherCard key={uuidv4()} hourlyData={hourlyData} />;
        })}
      </div>
    </>
  );
};

export default HourlyWeather;

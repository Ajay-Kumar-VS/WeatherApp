//importing tostify
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

import "./SearchBox.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addWeatherDetails } from "../../ReduxStore/DataSlice";
import get4DaysForcastDetails from "../../ApiCallFuntions/get4DaysForcastData";
import hourlyForcastDetails from "../../ApiCallFuntions/getHourlyForcastDetails";
import { getCityLattitudeAndLongitude } from "../../ApiCallFuntions/getCityLattitudeAndLongitude";
import { getCurrentWeatherDetailsFromApi } from "../../ApiCallFuntions/getCurrentWeatherDetailsFromApi";

const SearchBox = () => {
  // to manage cityName that is given by user as input
  const [cityName, setCityName] = useState("");

  // dispatch function of global store  (redux toolkit )
  const dispatch = useDispatch();

  //function that will get invoked when user will click on search button to get weather details
  async function getWeatherDetails(e, cityName) {
    e.preventDefault();

    // checking is user have not given empty cityname !
    try {
      //removing space from head and trail of inputed cityName
      cityName.trim();

      // if there is no cityName means empty string is passed by user then throwing error
      if (cityName.length === 0) {
        throw Error("Enter City Name");
      }
    } catch (error) {
      //if cityName is empty throwing an tostify component for error that is imported from react-tostify check in dependency
      Toastify({
        text: "Please Enter CityName ",
        duration: 1500,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "center", // `top` or `bottom`
        position: "center", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        },

        offset: {
          x: 0, // horizontal axis - can be a number or a string indicating unity. eg: '2em'
          y: 210, // vertical axis - can be a number or a string indicating unity. eg: '2em'
        }, // Callback after click
      }).showToast();
      return;
    }

    // To get lattitude and longitude
    let getCityLatAndLonDetails;
    //if city name is not corect handling it.
    try {
      getCityLatAndLonDetails = await getCityLattitudeAndLongitude(cityName);
    } catch (error) {
      Toastify({
        text: "Please Enter CityName correctly",
        duration: 1500,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "center", // `top` or `bottom`
        position: "center", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        },

        offset: {
          x: 0, // horizontal axis - can be a number or a string indicating unity. eg: '2em'
          y: 210, // vertical axis - can be a number or a string indicating unity. eg: '2em'
        }, // Callback after click
      }).showToast();
      return;
    }

    let lattitude = getCityLatAndLonDetails[0];
    let longitude = getCityLatAndLonDetails[1];

    let country = getCityLatAndLonDetails[2];

    //calling function to  get wether details and handling if we did not get weather details because of some api issue
    let currentDayWeatherData;
    try {
      currentDayWeatherData = await getCurrentWeatherDetailsFromApi(
        lattitude,
        longitude
      );
    } catch (error) {
      Toastify({
        text: "Something went wrong,try again after some time",
        duration: 1000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "center", // `top` or `bottom`
        position: "center", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        },

        offset: {
          x: 50, // horizontal axis - can be a number or a string indicating unity. eg: '2em'
          y: 210, // vertical axis - can be a number or a string indicating unity. eg: '2em'
        }, // Callback after click
      }).showToast();
      return;
    }

    //calling function to  get hourlyweather details and handling if we did not get weather details because of some api issue

    let hourlyForcastData;
    try {
      hourlyForcastData = await hourlyForcastDetails(lattitude, longitude);
    } catch (error) {
      Toastify({
        text: "Something went wrong,try again after some time",
        duration: 1000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "center", // `top` or `bottom`
        position: "center", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        },

        offset: {
          x: 0, // horizontal axis - can be a number or a string indicating unity. eg: '2em'
          y: 210, // vertical axis - can be a number or a string indicating unity. eg: '2em'
        }, // Callback after click
      }).showToast();
      return;
    }

    //calling function to  get4daysWeather details and handling if we did not get weather details because of some api issue

    let forcastDataOfnext4days;
    try {
      forcastDataOfnext4days = await get4DaysForcastDetails(
        lattitude,
        longitude
      );
    } catch (error) {
      Toastify({
        text: "Something went wrong,try again after some time",
        duration: 1000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "center", // `top` or `bottom`
        position: "center", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        },

        offset: {
          x: 0, // horizontal axis - can be a number or a string indicating unity. eg: '2em'
          y: 210, // vertical axis - can be a number or a string indicating unity. eg: '2em'
        }, // Callback after click
      }).showToast();
      return;
    }

    // putting all required data into an object to sen it to redux store by the help of dispatch function
    let data = {
      country: country,
      cityName: cityName,
      currentDayWeatherData: currentDayWeatherData,
      hourlyForcastData: hourlyForcastData,
      forcastDataOfnext4days: forcastDataOfnext4days,
    };
    // sendind data to  store
    dispatch(addWeatherDetails(data));
  }

  return (
    <>
      <div className="SearchBox">
        <input
          id="inputBox"
          placeholder="ENTER CITYNAME HERE"
          value={cityName}
          onChange={(e) => setCityName(e.target.value.toLocaleUpperCase())}
        />

        <button
          id="cheackWeatherbutton"
          onClick={(e) => getWeatherDetails(e, cityName)}
        >
          Check
        </button>
      </div>
    </>
  );
};

export default SearchBox;

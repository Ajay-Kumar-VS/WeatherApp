//api key importing and parsing it of OpenWeather.com
const ApiKey = import.meta.env.VITE_API_KEY;

//funtion to to get lattitude and longitude of user entered cityname as openweather.com take
// only lattitude and longitude as params in api.
export async function getCityLattitudeAndLongitude(cityName) {
  let url = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=${ApiKey}`;

  //fetching data from api of lattitude and longitude
  let dataFromUrl = await fetch(url);

  // parsing to JSON format
  let CityGeograpicalDetails = await dataFromUrl.json();

  // returning lattitude and longitude and country
  return [
    CityGeograpicalDetails[0].lat,
    CityGeograpicalDetails[0].lon,
    CityGeograpicalDetails[0].country,
  ];
}

// importing Api of openWeatherMap.com
const ApiKey = import.meta.env.VITE_API_KEY;
export async function getCurrentWeatherDetailsFromApi(lat, lon) {
  let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${ApiKey}`;

  //fetching data of current day
  let dataFromUrl = await fetch(url);
  //parsing to JSON format
  let dataInJsonFormat = await dataFromUrl.json();

  // extracting needed data
  let weatherDetails = {
    temp: dataInJsonFormat.main.temp,
    weather: dataInJsonFormat.weather[0].main,
    wind: dataInJsonFormat.wind.speed,
  };

  return weatherDetails;
}

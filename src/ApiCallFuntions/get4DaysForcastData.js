// Api key of WeatherBit
let forcast_API_key = import.meta.env.VITE_FORCAST_API_KEY;

// funtion to get weather deatails of 4 days from weatherBit
async function get4DaysForcastDetails(lat, lon) {
  //fetching data
  let dataFromUrl = await fetch(
    `https://api.weatherbit.io/v2.0/forecast/daily?&lat=${lat}&lon=${lon}&key=${forcast_API_key}`
  );
  //parsing to Json Format

  let dataInJSON = await dataFromUrl.json();

  // from api getting 16days data from current day 4so extracting weather details
  //of next for 4 day and storing into forcastDetails array
  let forcastDetails = [];
  for (let i = 1; i <= 4; i++) {
    let forcastDetailsObj = {
      date: dataInJSON.data[i].datetime,
      temp: dataInJSON.data[i].temp,
      UV: dataInJSON.data[i].uv,
      weather: dataInJSON.data[i].weather.description,
      wind: dataInJSON.data[i].wind_spd,
    };
    forcastDetails.push(forcastDetailsObj);
  }

  return forcastDetails;
}
export default get4DaysForcastDetails;

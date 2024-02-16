// api of weatherBit from .env
let forcast_API_key = import.meta.env.VITE_FORCAST_API_KEY;

// funtion to get hourlydata of weather of user given city
async function hourlyForcastDetails(lat, lon) {
  // fetching data
  let dataFromUrl = await fetch(
    `https://api.weatherbit.io/v2.0/forecast/hourly?&lat=${lat}&lon=${lon}&key=${forcast_API_key}&hours=6`
  );

  // parsing data to JSON
  let dataInJSON = await dataFromUrl.json();

  // extracting needed data from got response from api and storing it into forcastDetails array
  let forcastDetails = [];
  dataInJSON.data.forEach((element) => {
    let forcastDetailsObj = {
      time: element.timestamp_local,
      temp: element.temp,
      UV: element.uv,
      weather: element.weather.description,
      wind: element.wind_spd,
    };

    forcastDetails.push(forcastDetailsObj);
  });

  return forcastDetails;
}

export default hourlyForcastDetails;

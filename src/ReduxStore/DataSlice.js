import { createSlice } from "@reduxjs/toolkit";

// intial state of redux store

const initialState = [
  {
    city: "",
    currentDayWeatherData: { temp: 0, weather: "", wind: 0 },
    hourlyForcastData: [],
    forcastDataOfnext4days: [],
  },
];

// weather slice of store
const weatherSlice = createSlice({
  name: "weatherDetails",
  initialState,
  reducers: {
    addWeatherDetails: (state, action) => {
      const weather = action.payload;

      // poping if old data is present in array
      state.pop();
      //pushing data to that we will get from action payload
      state.push(weather);
    },
  },
});

export const { addWeatherDetails } = weatherSlice.actions;

export default weatherSlice.reducer;

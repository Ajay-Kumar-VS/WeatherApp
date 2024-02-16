// redux store file

import { configureStore } from "@reduxjs/toolkit";
import weatherSlice from "./DataSlice";

//creating redux store
const store = configureStore({
  reducer: {
    Weather: weatherSlice,
  },
});
export default store;

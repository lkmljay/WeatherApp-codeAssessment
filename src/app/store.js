import { configureStore } from '@reduxjs/toolkit';
import weatherReducer from '../features/WeatherApp/WeatherApp.redux'

export default configureStore({
  reducer: {
    weather: weatherReducer
  },
});

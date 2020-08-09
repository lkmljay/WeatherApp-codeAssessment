import { GET_WEATHER_DATA } from './WeatherApp.action.types'

  export const getWeatherData = weatherData => ({
    type: GET_WEATHER_DATA,
    payload: {
      weatherData: weatherData
    }
  })
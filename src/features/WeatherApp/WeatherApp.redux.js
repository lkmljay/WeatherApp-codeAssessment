import { GET_WEATHER_DATA} from "./WeatherApp.action.types";

const initialState = {
  weatherData: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_WEATHER_DATA: {
        const cities = {}
        for(let state in action.payload.weatherData.States) {
            action.payload.weatherData.States[state].cities.forEach(city => {
                cities[city.name] = city.forecast
            });
        }
        return {
            ...state,
            weatherData: cities
        }
    }
    default:
      return state;
  }
}

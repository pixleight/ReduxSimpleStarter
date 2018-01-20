// Axios makes AJAX requests
import axios from 'axios';

// OpenWeatherMap API Key
const API_KEY = 'e20456c6510d56c6147c3e42fe139c52';
// OpenWeatherMap API base request URL
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  // Build our URL
  const url = `${ROOT_URL}&q=${city},us`;
  // Get results via axios.get
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  }
}

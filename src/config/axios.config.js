import axios from 'axios';

const api = axios.create({
  baseURL: 'http://api.weatherapi.com/v1',
  headers: {
    'Content-Type': 'application/json',
  },
  params: {
    key: process.env.REACT_APP_WEATHER_API_KEY,
  },
});

export default api;

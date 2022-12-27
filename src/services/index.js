import api from '../config/axios.config';

export const getCurrentWeather = async ({ queryKey }) => {
  const location = queryKey[1];

  if (!location) {
    return null;
  }

  const response = await api.get(`/current.json`, {
    params: {
      q: location,
      aqi: 'no',
    },
  });

  if (response.statusText !== 'OK') {
    throw new Error(`Something went wrong with the API call.`);
  }

  console.log(response);

  return response;
};

export const getCurrentForecast = async ({ queryKey }) => {
  const location = queryKey[1];

  if (!location) {
    return null;
  }

  const response = await api.get(`/forecast.json`, {
    params: {
      q: location,
      days: 1,
      aqi: 'no',
      alerts: 'no',
    },
  });

  if (response.statusText !== 'OK') {
    throw new Error(`Something went wrong with the API call.`);
  }

  console.log(response);

  return response;
};

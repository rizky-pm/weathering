import { useQuery } from '@tanstack/react-query';
import { Provider } from 'react-redux';
import Detail from './components/Detail/Detail';

import Main from './components/Main/Main';

import { useGeoLocation } from './hooks/useGeoLocation';
import { getCurrentForecast } from './services';
// import store from './store';

function App() {
  const geoLocation = useGeoLocation();

  const results = useQuery(['currentWeather', geoLocation], getCurrentForecast);
  const currentWeather = results?.data;
  // const forecast = results?.data?.data?.forecast?.forecastday[0];

  return (
    // <Provider store={store}>
    <>
      <Main data={currentWeather?.data} />
      <Detail
        astroData={currentWeather?.data?.forecast.forecastday[0]}
        data={currentWeather?.data}
      />
    </>
    // </Provider>
  );
}

export default App;

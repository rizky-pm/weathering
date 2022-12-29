import { useQuery } from '@tanstack/react-query';
import Detail from './components/Detail/Detail';

import Main from './components/Main/Main';

import { useGeoLocation } from './hooks/useGeoLocation';
import { getCurrentForecast } from './services';
// import store from './store';

function App() {
  const geoLocation = useGeoLocation();

  const results = useQuery(['currentWeather', geoLocation], getCurrentForecast);

  const currentWeather = results?.data;

  // replace 64x64 with 128x128
  const iconUrl = currentWeather?.data?.current?.condition?.icon.replace(
    '64x64',
    '128x128'
  );

  if (results.isLoading)
    return (
      <div className='loading-container'>
        <h1>Loading Data ...</h1>
      </div>
    );

  return (
    currentWeather && (
      <>
        <Main data={currentWeather.data} iconUrl={iconUrl} />
        <Detail
          astroData={currentWeather.data.forecast.forecastday[0]}
          data={currentWeather.data}
        />
      </>
    )
  );
}

export default App;

import React from 'react';
import { useQuery } from '@tanstack/react-query';
import moment from 'moment';

import TemperatureChart from '../TemperatureChart/TemperatureChart';
import MainStyled from './Main.styled';

// import ClearSky from '../../assets/images/clear.jpg';
import CloudySky from '../../assets/images/cloudy.jpg';

import { getCurrentForecast } from '../../services';
import { useGeoLocation } from '../../hooks/useGeoLocation';

const Main = () => {
  const geoLocation = useGeoLocation();

  const results = useQuery(['currentWeather', geoLocation], getCurrentForecast);
  const currentWeather = results?.data;
  const forecast = results?.data?.data?.forecast?.forecastday[0];

  console.log(currentWeather);

  return (
    <MainStyled>
      <img className='image-sky' src={CloudySky} alt='Clear sky' />
      <div className='overlay'></div>
      <div className='controller'>
        {results?.data && (
          <div className='weather'>
            <div className='weather__degree'>
              {/* <img
                className='weather__degree__icon'
                src={currentWeather?.data.current.condition.icon}
                alt=''
              /> */}
              <span>
                {currentWeather?.data.current.temp_c}
                <span className='degree'>&deg;C</span>
              </span>
            </div>

            <div className='vertical-line'></div>

            <div className='weather__situation'>
              <h1>
                {currentWeather?.data.location.name},{' '}
                {currentWeather?.data.location.country}
              </h1>
              <span>
                {moment(currentWeather?.data.current.last_updated).format(
                  'dddd, HH:mm'
                )}
              </span>
              <span>{currentWeather?.data.current.condition.text}</span>
            </div>
          </div>
        )}

        <TemperatureChart data={forecast} />
      </div>
    </MainStyled>
  );
};

export default Main;

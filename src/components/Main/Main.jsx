import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';

import LocationInput from '../LocationInput/LocationInput';

import MainStyled from './Main.styled';
import ClearSky from '../../assets/images/clear.jpg';
import { getCurrentWeather } from '../../services';

const Main = () => {
  const [location, setLocation] = useState('');

  const results = useQuery(['currentWeather', location], getCurrentWeather);
  const currentWeather = results?.data;

  return (
    <MainStyled>
      <img className='image-sky' src={ClearSky} alt='Clear sky' />
      <div className='overlay'></div>
      <div className='controller'>
        {results?.data && (
          <>
            <h1>{currentWeather?.data.location.name}</h1>
            <img
              className='weather-icon'
              src={currentWeather?.data.current.condition.icon}
              alt=''
            />
            <span>{currentWeather?.data.current.condition.text}</span>
            <span>{currentWeather?.data.current.temp_c}&deg;C</span>
          </>
        )}

        <LocationInput setLocation={setLocation} />
      </div>
    </MainStyled>
  );
};

export default Main;

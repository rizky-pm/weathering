import React from 'react';
import { useQuery } from '@tanstack/react-query';
import moment from 'moment';

import TemperatureChart from '../TemperatureChart/TemperatureChart';
import MainStyled from './Main.styled';

// import ClearSky from '../../assets/images/clear.jpg';
import CloudySky from '../../assets/images/cloudy.jpg';

const Main = ({ data }) => {
  console.log(data);

  return (
    <MainStyled>
      <img className='image-sky' src={CloudySky} alt='Clear sky' />
      <div className='overlay'></div>
      <div className='controller'>
        {data && (
          <div className='weather'>
            <div className='weather__degree'>
              <span>
                {data?.current?.temp_c}
                <span className='degree'>&deg;C</span>
              </span>
            </div>

            <div className='vertical-line'></div>

            <div className='weather__situation'>
              <h1>
                {data?.location?.name}, {data?.location?.country}
              </h1>
              <span>{moment(data?.last_updated).format('dddd, HH:mm')}</span>
              <span>{data?.current?.condition?.text}</span>
            </div>
          </div>
        )}

        <TemperatureChart data={data?.forecast.forecastday[0]} />
      </div>
    </MainStyled>
  );
};

export default Main;

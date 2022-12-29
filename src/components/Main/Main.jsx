import React from 'react';
import moment from 'moment';

import TemperatureChart from '../TemperatureChart/TemperatureChart';
import MainStyled from './Main.styled';

const Main = ({ data, iconUrl }) => {
  console.log(data);
  return (
    <MainStyled>
      <div className='overlay'></div>
      <div className='controller'>
        {data ? (
          <>
            <div className='weather'>
              <div className='weather__degree'>
                <img src={iconUrl} alt='Current weather icon' />
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

            <TemperatureChart data={data?.forecast.forecastday[0]} />
          </>
        ) : (
          <h1>Loading Data ...</h1>
        )}
      </div>
    </MainStyled>
  );
};

export default Main;

import useAstro from '../../hooks/useAstro';
import airQualityLabelRenderer from '../../utils/aqIndexHelper';

import DetailStyled from './Detail.styled';

import SunIcon from '../../assets/icons/sun.png';

const Detail = ({ astroData, data }) => {
  const { diff, loaded } = useAstro(astroData?.date, astroData?.astro);

  console.log(data);

  return (
    <DetailStyled sunPosition={diff}>
      <div className='detail'>
        <div className='detail__sun'>
          <div className='detail__sun--rise'>
            <p>Sunrise</p>
            <p>{astroData?.astro.sunrise}</p>
          </div>
          <div className='detail__sun--line'>
            <img className='icon-sun' src={SunIcon} alt='Sun' />
          </div>
          <div className='detail__sun--set'>
            <p>Sunset</p>
            <p>{astroData?.astro.sunset}</p>
          </div>
        </div>
        <div className='detail__info'>
          <div className='detail__info__card'>
            <p>Humidity</p>
            <p>{data?.current?.humidity}%</p>
          </div>
          <div className='detail__info__card'>
            <p>Feels Like</p>
            <p>{data?.current?.feelslike_c}&deg;C</p>
          </div>
          <div className='detail__info__card'>
            <p>UV Index</p>
            <p>{data?.current?.uv}</p>
          </div>
          <div className='detail__info__card'>
            <p>Air Quality</p>
            <p>
              {data?.current?.air_quality['us-epa-index']} -{' '}
              {airQualityLabelRenderer(
                data?.current?.air_quality['us-epa-index']
              )}
            </p>
          </div>
          <div className='detail__info__card'>
            <p>Wind Speed</p>
            <p>{data?.current?.wind_kph} km/h</p>
          </div>
          <div className='detail__info__card'>
            <p>Wind Direction</p>
            <p>
              {data?.current?.wind_degree}
              &deg; - {data?.current?.wind_dir}
            </p>
          </div>
        </div>
        <a href='https://www.weatherapi.com/' title='Free Weather API'>
          <img
            src='//cdn.weatherapi.com/v4/images/weatherapi_logo.png'
            alt='Weather data by WeatherAPI.com'
            border='0'
          />
        </a>
      </div>
    </DetailStyled>
  );
};

export default Detail;

import useAstro from '../../hooks/useAstro';

import DetailStyled from './Detail.styled';

import SunIcon from '../../assets/icons/sun.png';

const Detail = ({ data }) => {
  const diffAstro = useAstro(data?.date);

  console.log(data ?? 'No data');

  return (
    <DetailStyled sunPosition={diffAstro}>
      <div className='detail'>
        <div className='detail__sun'>
          <div className='detail__sun--rise'>
            <p>Sunrise</p>
            <p>{data?.astro.sunrise}</p>
          </div>
          <div className='detail__sun--line'>
            <img className='icon-sun' src={SunIcon} alt='Sun' />
          </div>
          <div className='detail__sun--set'>
            <p>Sunset</p>
            <p>{data?.astro.sunset}</p>
          </div>
        </div>
        <div className='detail__info'>
          <div className='detail__info__card'>
            <p>Average Humidity</p>
            <p>{data?.day?.avghumidity}%</p>
          </div>
          <div className='detail__info__card'>
            <p>Min Temp</p>
            <p>{data?.day?.mintemp_c}&deg;C</p>
          </div>
          <div className='detail__info__card'>
            <p>Average Temp</p>
            <p>{data?.day?.avgtemp_c}&deg;C</p>
          </div>
          <div className='detail__info__card'>
            <p>Max Temp</p>
            <p>{data?.day?.maxtemp_c}&deg;C</p>
          </div>
          <div className='detail__info__card'>
            <p>Chance of Rain</p>
            <p>{data?.day?.daily_chance_of_rain}C</p>
          </div>
          <div className='detail__info__card'>
            <p>UV Index</p>
            <p>{data?.day?.uv}</p>
          </div>
          <div className='detail__info__card'>
            <p>Average Visibility</p>
            <p>{data?.day?.avgvis_km} Km</p>
          </div>
          <div className='detail__info__card'>
            <p>Wind Speed</p>
            <p> &lt; {data?.day?.maxwind_kph} Km/H</p>
          </div>
        </div>
      </div>
    </DetailStyled>
  );
};

export default Detail;

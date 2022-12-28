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
      </div>
    </DetailStyled>
  );
};

export default Detail;

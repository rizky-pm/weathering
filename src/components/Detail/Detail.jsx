import DetailStyled from './Detail.styled';

import SunIcon from '../../assets/icons/sun.png';

const Detail = ({ data }) => {
  console.log(data);

  return (
    <DetailStyled>
      <div className='detail'>
        {/* <h1>More Detail</h1> */}
        <div className='detail__sun'>
          <div className='detail__sun--rise'>
            <p>Sunrise</p>
            <p>06:00</p>
          </div>
          <div className='detail__sun--line'>
            <img className='icon-sun' src={SunIcon} alt='Sun' />
          </div>
          <div className='detail__sun--set'>
            <p>Sunset</p>
            <p>18:00</p>
          </div>
        </div>
      </div>
    </DetailStyled>
  );
};

export default Detail;

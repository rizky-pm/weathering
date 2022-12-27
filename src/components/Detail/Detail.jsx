import DetailStyled from './Detail.styled';

const Detail = ({ data }) => {
  return (
    <DetailStyled>
      <div className='detail'>
        {/* <h1>More Detail</h1> */}
        <div className='detail__sun'>
          <div className='detail__sun--rise'>
            <p>Sunrise</p>
            <p>06:00</p>
          </div>
          <hr />
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

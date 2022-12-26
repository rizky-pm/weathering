import styled from 'styled-components';

const MainStyled = styled.main`
  position: relative;
  width: 100%;
  height: 100vh;
  color: var(--color-light);
  /* height: 100vh; */

  .image-sky {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }

  .controller {
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    z-index: 10;

    .weather-icon {
      width: 100px;
      height: 100px;
    }
  }
`;

export default MainStyled;

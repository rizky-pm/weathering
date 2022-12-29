import styled from 'styled-components';

const MainStyled = styled.main`
  position: relative;
  width: 100%;
  height: 100vh;
  color: var(--color-light);
  overflow: hidden;
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
  }

  .controller {
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--spacing-xl);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    z-index: 10;

    .weather {
      display: flex;
      align-items: center;
      gap: var(--spacing-lg);
      height: 100%;

      @media (max-width: 768px) {
        flex-direction: column;
      }

      &__degree {
        display: flex;
        align-items: center;
        font-size: 5rem;

        &__icon {
          width: 64px;
          height: 64px;
        }

        .degree {
          font-size: 0.5em;
          vertical-align: top;
        }
      }

      @media (max-width: 768px) {
        &__degree {
          display: flex;
          flex-direction: column;
          font-size: 7rem;

          &__icon {
            width: 164px;
            height: 164px;
          }

          .degree {
            font-size: 0.25em;
            vertical-align: top;
          }
        }
      }

      &__situation {
        display: flex;
        flex-direction: column;
        text-align: right;
        gap: var(--spacing-sm);

        span {
          color: var(--color-grey);
        }
      }

      @media (max-width: 768px) {
        &__situation {
          text-align: center;

          span {
            font-size: 1.05rem;
          }
        }
      }

      .vertical-line {
        align-self: stretch;
        width: 3px;
        border-radius: 10px;
        background-color: var(--color-light);
      }
    }
  }
`;

export default MainStyled;

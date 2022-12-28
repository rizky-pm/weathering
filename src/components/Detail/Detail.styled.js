import styled from 'styled-components';

const DetailStyled = styled.div`
  height: 100vh;
  background: var(--color-primary);
  background: linear-gradient(
    180deg,
    rgba(77, 145, 255, 1) 0%,
    rgba(249, 194, 85, 1) 100%
  );
  color: var(--color-light);
  padding: var(--spacing-xl) 128px;
  text-align: center;
  overflow: hidden;

  .detail {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-xl);
    /* background-color: rgba(235, 245, 238, 0.25); */

    &__sun {
      display: flex;
      justify-content: space-between;
      align-items: center;

      &--line {
        position: relative;
        width: 80%;
        height: 5px;
        background-color: var(--color-light);
        border: none;

        .icon-sun {
          object-fit: cover;
          position: absolute;
          top: 50%;
          left: ${(props) => props.sunPosition}%;
          transform: translate(0%, -50%);
          width: 50px;
          height: 50px;
        }
      }

      &__rise {
        color: red;
      }
    }
  }
`;

export default DetailStyled;

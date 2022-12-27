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

  hr {
    width: 80%;
    height: 3px;
    background-color: var(--color-light);
    border: none;
    /* border: 1px solid var(--color-light); */
  }

  .detail {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-xl);
    /* background-color: rgba(235, 245, 238, 0.25); */

    &__sun {
      display: flex;
      justify-content: space-between;
      align-items: center;

      &__rise {
        color: red;
      }
    }
  }
`;

export default DetailStyled;

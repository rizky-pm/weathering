import styled from 'styled-components';

const DetailStyled = styled.div`
  height: 100vh;
  color: var(--color-light);
  padding: var(--spacing-xl) 128px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  text-align: center;
  overflow: hidden;

  .detail {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-xl);

    &__sun {
      display: flex;
      justify-content: space-evenly;
      align-items: center;

      &--line {
        position: relative;
        width: 80%;
        height: 3px;
        background-color: var(--color-light);
        border: none;

        .icon-sun {
          object-fit: cover;
          position: absolute;
          top: 50%;
          left: ${(props) => props.sunPosition}%;
          transform: translate(0%, -50%);
          width: 40px;
          height: 40px;
        }
      }

      &--rise,
      &--set {
        display: flex;
        flex-direction: column;
        gap: var(--spacing-sm);
      }
    }

    &__info {
      display: flex;
      flex-wrap: wrap;
      row-gap: var(--spacing-xl);
      justify-content: space-between;
      background-color: rgba(34, 34, 34, 0.25);
      padding: var(--spacing-xl) 0;
      border-radius: 5px;

      &__card {
        display: flex;
        align-items: center;
        flex-basis: calc(100% / 3);
        flex-direction: column;
        gap: var(--spacing-md);

        p {
          &:nth-of-type(1) {
            color: var(--color-light);
            font-weight: 600;
          }
        }
      }
    }
  }

  @media (max-width: 768px) {
    height: auto;
    justify-content: flex-start;
    padding: var(--spacing-xl) var(--spacing-lg);

    .detail {
      &__info {
        flex-direction: column;
        flex-wrap: nowrap;
        row-gap: 0;
        gap: var(--spacing-xl);

        &__card {
          flex-basis: 100%;
          gap: 0;
        }
      }
    }
  }
`;

export default DetailStyled;

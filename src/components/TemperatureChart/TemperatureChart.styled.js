import styled from 'styled-components';

const ChartWrapper = styled.div`
  width: 50%;
  /* overflow-y: hidden; */

  span {
    font-size: 0.9em;
    color: var(--color-grey);
  }

  @media (max-width: 768px) {
    width: 100%;

    span {
      display: block;
      text-align: center;
      font-size: 0.9em;
      color: var(--color-grey);
    }
  }
`;

export default ChartWrapper;

import styled from 'styled-components';

const LocationInputStyled = styled.form`
  position: relative;
  width: 50%;
  z-index: 2;
  margin-top: 20px;
  display: flex;
  align-items: center;
  border-radius: 5px;
  overflow: hidden;
  border: 3px solid transparent;
  transition: all 0.3s ease-in-out;

  :focus-within {
    border: 3px solid rgba(0, 0, 0, 0.45);
  }

  .input-location {
    width: 100%;
    padding: var(--spacing-sm) var(--spacing-md);
    outline: none;
    border: none;
    font-size: 1rem;
    background-color: var(--color-light);
  }

  .btn-search {
    position: absolute;
    right: 0;
    top: 0;
    height: 100%;
    min-width: 7.5%;
    outline: none;
    border: none;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    background-color: var(--color-primary);
    padding: 0 var(--spacing-sm);
  }

  .search-icon {
    cursor: pointer;
  }
`;

export default LocationInputStyled;

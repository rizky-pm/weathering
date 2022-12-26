import React from 'react';

import LocationInputStyled from './LocationInput.styled';

const LocationInput = ({ setLocation }) => {
  return (
    <LocationInputStyled
      onSubmit={(e) => {
        e.preventDefault();
        const data = new FormData(e.target);
        const location = data.get('location');
        setLocation(location);

        // clear input
        e.target.reset();
      }}
    >
      <input
        className='input-location'
        type='text'
        placeholder='Location'
        name='location'
      />
      <button className='btn-search' type='submit'>
        Search
      </button>
    </LocationInputStyled>
  );
};

export default LocationInput;

import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import MayContext from './MayContext';

function StarProvider({ children }) {
  const [data, setData] = useState();

  useEffect(() => {
    async function requiFetch() {
      const Api = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
      const response = await Api.json();
      setData(response.results);
    }
    requiFetch();
  }, []);

  return (
    <MayContext.Provider value={ { data } }>

      {children}

    </MayContext.Provider>
  );
}

StarProvider.propTypes = {
  children: PropTypes.func.isRequired,
};

export default StarProvider;

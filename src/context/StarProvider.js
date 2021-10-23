import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import MayContext from './MayContext';

// referencia para fazer esse "dataFilters " do colega João Vitor Cordeiro.
function StarProvider({ children }) {
  const [data, setData] = useState();
  const [filters, setFilters] = useState({
    dataFilters: data,
    filterByName: {
      name: '',
    },
  });
  const [filterValues, setFilterValues] = useState({
    dataFilters2: data,
    filterByNumericValues: [
      {
        column: '',
        comparison: '',
        value: '',
      },
    ],
  });

  useEffect(() => {
    async function requiFetch() {
      const Api = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
      const response = await Api.json();
      setData(response.results);
      setFilters((prevState) => ({ ...prevState, dataFilters: response.results }));
    }
    requiFetch();
  }, []);

  // referencia para fazer esse "dataFilters " do colega João Vitor Cordeiro.
  function handleChangeFilters({ target: { value } }) {
    const newFilter = data.filter((filt) => filt.name.toLowerCase()
      .includes(value.toLowerCase()));
    setFilters({ ...filters, filterByName: { name: value }, dataFilters: newFilter });
  }

  return (
    <MayContext.Provider
      value={
        { data, filters, filterValues, handleChangeFilters, setFilterValues }
      }
    >

      {children}

    </MayContext.Provider>
  );
}

StarProvider.propTypes = {
  children: PropTypes.func.isRequired,
};

export default StarProvider;

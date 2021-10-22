import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import MayContext from './MayContext';

const options = [
  'population',
  'orbital_period',
  'diameter',
  'rotation_period',
  'surface_water',
];

function StarProvider({ children }) {
  const [data, setData] = useState();
  const [filters, setFilters] = useState({
    dataFilters: data,
    filterByName: {
      name: '',
    },
  });
  const [optionFilter, setOpionFilter] = useState(options);
  const [filterValues, setFilterValues] = useState({

    removeFiltter: optionFilter,
    dataFilters2: data,
    filterByNumericValues: [
      {
        column: '',
        comparison: '',
        value: '',
      },
    ],
  });
  console.log(optionFilter);

  useEffect(() => {
    async function requiFetch() {
      const Api = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
      const response = await Api.json();
      setData(response.results);
      setFilters((prevState) => ({ ...prevState, dataFilters: response.results }));
    }
    requiFetch();
  }, []);

  /* function FilterName(value) {
    const newFilter = data.filter((filt) => filt.name.toLowerCase()
      .includes(value.toLowerCase()));
    console.log(filters);
    setFilters({ ...filters, dataFilters: newFilter });
  } */

  function handleChangeFilters({ target: { value } }) {
    const newFilter = data.filter((filt) => filt.name.toLowerCase()
      .includes(value.toLowerCase()));
    setFilters({ ...filters, filterByName: { name: value }, dataFilters: newFilter });
  }

  return (
    <MayContext.Provider value={ { data, filters, filterValues, setOpionFilter, createNewArray, handleChangeFilters, setFilterValues } }>

      {children}

    </MayContext.Provider>
  );
}

StarProvider.propTypes = {
  children: PropTypes.func.isRequired,
};

export default StarProvider;

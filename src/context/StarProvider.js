import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import MayContext from './MayContext';

const one = 1;

// referencia para fazer esse "dataFilters " do colega João Vitor Cordeiro.
function StarProvider({ children }) {
  const [data, setData] = useState();
  const [filters, setFilters] = useState({
    dataFilters: data,
    filterByName: {
      name: '',
    },
  });
  const [orderSort, setOrderSort] = useState({
    order: {
      column: 'name',
      sort: 'ASC',
    } });

  const [filterValues, setFilterValues] = useState({
    dataFilters2: data,
    filterByNumericValues: [
      {
        column: '',
        comparison: '',
        value: '',
      },
    ],
    orderSort,
  });

  useEffect(() => {
    async function requiFetch() {
      const Api = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
      const response = await Api.json();
      console.log(response.results);
      // referencia desse sort() https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
      // Objetos podem ser ordenados de acordo com o valor de uma de suas propriedades.
      const sortResult = response.results.sort((a, b) => {
        if (a.name < b.name) return -one;
        if (a.name > b.name) return one;
        return 0;
      });

      setData(sortResult);
      setFilters((prevState) => ({ ...prevState, dataFilters: sortResult }));
    }

    requiFetch();
  }, []);

  // referencia para fazer esse "dataFilters " do colega João Vitor Cordeiro T13 B.
  function handleChangeFilters({ target: { value } }) {
    const newFilter = data.filter((filt) => filt.name.toLowerCase()
      .includes(value.toLowerCase()));
    setFilters({ ...filters, filterByName: { name: value }, dataFilters: newFilter });
  }
  // referencia para fazer essas função do companheiro Jose Breno Fe. da Silva. T13 B.
  // função sort() de camparação por numeros
  function sortNumbers(valueFilter, column, sort) {
    switch (sort) {
    case 'ASC':
      return valueFilter.sort((a, b) => Number(a[column]) - Number(b[column]));
    case 'DESC':
      return valueFilter.sort((a, b) => Number(b[column]) - Number(a[column]));
    default:
      return null;
    }
  }
  function sortStrings(valueFilter, column, sort) {
    switch (sort) {
    case 'ASC':
      return valueFilter.sort((a, b) => {
        if (a[column] < b[column]) return -one;
        if (a[column] > b[column]) return one;
        return 0;
      });
    case 'DESC':
      return valueFilter.sort((a, b) => {
        if (a[column] > b[column]) return -one;
        if (a[column] < b[column]) return one;
        return 0;
      });
    default:
      return null;
    }
  }
  const numberSort = [
    'rotation_period',
    'orbital_period',
    'diameter',
    'gravity',
    'surfaceWater',
    'population',
  ];
  // função que chama a comparação da colunas por numeros ou string e Asc ou Desc.
  function submitOrder(column, sort) {
    const { dataFilters } = filters;
    setOrderSort({ order: { column, sort } });
    const numberss = numberSort.includes(column);
    if (!numberss) {
      return sortStrings(dataFilters, column, sort);
    } return sortNumbers(dataFilters, column, sort);
  }

  return (
    <MayContext.Provider
      value={
        { data,
          filters,
          filterValues,
          submitOrder,
          setFilters,
          handleChangeFilters,
          setFilterValues }
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

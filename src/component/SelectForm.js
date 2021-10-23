import React, { useContext, useState } from 'react';
import MayContext from '../context/MayContext';

const options = [
  'population',
  'orbital_period',
  'diameter',
  'rotation_period',
  'surface_water',
];

function ColumSelect() {
  const [optionFilter, setOpionFilter] = useState(options);
  const [column, setColumn] = useState('');
  const [comparison, setComparison] = useState('');
  const [value, setValue] = useState('');
  const { data, filterValues, setFilterValues } = useContext(MayContext);

  function handleFormSubmit(e) {
    e.preventDefault();
  }

  function remove() {
    const newOption = options.filter((option) => option !== column);
    setOpionFilter(newOption);
  }

  function Filter() {
    remove();

    if (comparison === 'maior que') {
      const newFilter = data
        .filter((filt) => parseFloat(filt[column]) > parseFloat(value));
      setFilterValues({ ...filterValues,
        filterByNumericValues: { column, comparison, value },
        dataFilters2: newFilter,
      });
    }

    if (comparison === 'menor que') {
      const newFilter = data
        .filter((filt) => parseFloat(filt[column]) < parseFloat(value));
      setFilterValues({ ...filterValues,
        filterByNumericValues: { column, comparison, value },
        dataFilters2: newFilter,
      });
    }
    if (comparison === 'igual a') {
      const newFilter = data
        .filter((filt) => parseFloat(filt[column]) === parseFloat(value));
      setFilterValues({ ...filterValues,
        filterByNumericValues: { column, comparison, value },
        dataFilters2: newFilter,
      });
    }

    /* com switch////
    const newFilter = data.filter((filt) => parseFloat(filt[column]) > parseFloat(value));

    switch (comparison) {
    case 'maior que':
      return setFilterValues({ ...filterValues, filterByNumericValues: { column, comparison, value }, dataFilters2: newFilter,
      });
    default: setFilterValues(data);
    } */
  }

  return (
    <form onSubmit={ handleFormSubmit }>
      <select
        name="column"
        id="column"
        value={ column }
        onChange={ (e) => setColumn(e.target.value) }
        data-testid="column-filter"
      >
        { optionFilter.map((option, index) => (

          <option key={ index } value={ option }>{ option }</option>

        )) }
      </select>
      {console.log(optionFilter)}
      <select
        name="comparison"
        id="comparison"
        value={ comparison }
        onChange={ (e) => setComparison(e.target.value) }
        data-testid="comparison-filter"
      >
        <option value="" disabled selected>Selecione uma condição</option>
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>

      </select>
      <input
        type="number"
        name="value"
        id="valor"
        min="1"
        value={ value }
        onChange={ (e) => setValue(e.target.value) }
        data-testid="value-filter"
      />
      <button
        type="button"
        onClick={ Filter }
        data-testid="button-filter"
      >
        Filtrar
      </button>
    </form>

  );
}

export default ColumSelect;

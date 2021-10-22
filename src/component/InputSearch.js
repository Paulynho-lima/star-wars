import React, { useContext } from 'react';
import MayContext from '../context/MayContext';

function InputSearch() {
  const { handleChangeFilters } = useContext(MayContext);
  return (
    <div>
      <span>
        <label htmlFor="nome">
          Search
          <input
            id="nome"
            data-testid="name-filter"
            type="text"
            name="nome"
            // value={ name }
            onChange={ handleChangeFilters }
          />
        </label>
      </span>

    </div>
  );
}

export default InputSearch;

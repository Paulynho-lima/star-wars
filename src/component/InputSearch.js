/* eslint-disable react/jsx-curly-spacing */
/* eslint-disable quotes */
// eslint-disable-next-line quotes
import React, { useContext } from "react";
import MayContext from "../context/MayContext";
import "./inputSear.css";

function InputSearch() {
  const { handleChangeFilters } = useContext(MayContext);
  return (
    <div className="divSearch">
      <span>
        <label htmlFor="nome">
          Search
          <input
            id="nome"
            data-testid="name-filter"
            type="text"
            name="nome"
            // value={ name }
            onChange={handleChangeFilters}
          />
        </label>
      </span>
    </div>
  );
}

export default InputSearch;

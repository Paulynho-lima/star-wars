/* eslint-disable operator-linebreak */
/* eslint-disable react/jsx-curly-spacing */
/* eslint-disable comma-dangle */
/* eslint-disable quotes */
import React, { useContext, useState } from "react";
import MayContext from "../context/MayContext";
import "./selecForm.css";

const options = [
  "population",
  "orbital_period",
  "diameter",
  "rotation_period",
  "surface_water",
];
const columnTable = [
  "name",
  "created",
  "edited",
  "films",
  "rotation_period",
  "orbital_period",
  "diameter",
  "climate",
  "gravity",
  "terrain",
  "surfaceWater",
  "population",
  "url",
];

function ColumSelect() {
  const [filterList, setFilterList] = useState([
    {
      column: "",
      comparison: "",
      value: "",
    },
  ]);
  const [optionFilter, setOpionFilter] = useState(options);
  const [column, setColumn] = useState("");
  const [comparison, setComparison] = useState("");
  const [value, setValue] = useState("");
  const [sortColumn, setSortColumn] = useState("name");
  const [sortValue, setSortValue] = useState("");
  const { data, filterValues, submitOrder, setFilterValues } =
    useContext(MayContext);

  function handleFormSubmit(e) {
    e.preventDefault();
  }

  function remove() {
    const newOption = options.filter((option) => option !== column);
    setOpionFilter(newOption);
  }

  function Filter() {
    remove();

    if (comparison === "maior que") {
      const newFilter = data.filter(
        (filt) => parseFloat(filt[column]) > parseFloat(value)
      );
      setFilterValues({
        ...filterValues,
        filterByNumericValues: { column, comparison, value },
        dataFilters2: newFilter,
      });
    }

    if (comparison === "menor que") {
      const newFilter = data.filter(
        (filt) => parseFloat(filt[column]) < parseFloat(value)
      );
      setFilterValues({
        ...filterValues,
        filterByNumericValues: { column, comparison, value },
        dataFilters2: newFilter,
      });
    }
    if (comparison === "igual a") {
      const newFilter = data.filter(
        (filt) => parseFloat(filt[column]) === parseFloat(value)
      );
      setFilterValues({
        ...filterValues,
        filterByNumericValues: { column, comparison, value },
        dataFilters2: newFilter,
      });
    }
    setFilterList((prev) => [...prev, { column, comparison, value }]);
    /* com switch////
    const newFilter = data.filter((filt) => parseFloat(filt[column]) > parseFloat(value));

    switch (comparison) {
    case 'maior que':
      return setFilterValues({ ...filterValues, filterByNumericValues: { column, comparison, value }, dataFilters2: newFilter,
      });
    default: setFilterValues(data);
    } */
  }
  function removeFilter(column2) {
    setFilterList(
      filterList.filter(({ column: column1 }) => column1 !== column2)
    );
    setFilterValues({
      filterByNumericValues: [
        {
          column: "",
          comparison: "",
          value: "",
        },
      ],
    });
  }

  return (
    <form className="selectColum" onSubmit={handleFormSubmit}>
      <select
        name="column"
        id="column"
        value={column}
        onChange={(e) => setColumn(e.target.value)}
        data-testid="column-filter"
      >
        {optionFilter.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>

      <select
        name="comparison"
        id="comparison"
        value={comparison}
        onChange={(e) => setComparison(e.target.value)}
        data-testid="comparison-filter"
      >
        <option value="" disabled selected>
          Selecione uma condição
        </option>
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <input
        type="number"
        name="value"
        id="valor"
        min="1"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        data-testid="value-filter"
      />
      <button type="button" onClick={Filter} data-testid="button-filter">
        Filtrar
      </button>

      {filterList.map((obj, index) => (
        <ul key={index}>
          <li data-testid="filter">
            {`${obj.column} ${obj.comparison} ${obj.value}`}
            <button type="button" onClick={() => removeFilter(column)}>
              X
            </button>
          </li>
        </ul>
      ))}

      <label htmlFor="sortFilter">
        <select
          name="sortFilter"
          id="sortFilter"
          data-testid="column-sort"
          onChange={(e) => setSortColumn(e.target.value)}
        >
          {columnTable.map((optio, index) => (
            <option key={index} value={optio}>
              {optio}
            </option>
          ))}
        </select>
      </label>
      <label htmlFor="ASC">
        ASC
        <input
          type="radio"
          name="sortRadio"
          id="ASC"
          value="ASC"
          data-testid="column-sort-input-asc"
          onChange={(e) => setSortValue(e.target.value)}
        />
      </label>
      <label htmlFor="DESC">
        DESC
        <input
          type="radio"
          name="sortRadio"
          id="DESC"
          value="DESC"
          data-testid="column-sort-input-desc"
          onChange={(e) => setSortValue(e.target.value)}
        />
      </label>
      <button
        type="button"
        data-testid="column-sort-button"
        onClick={() => submitOrder(sortColumn, sortValue)}
      >
        SubmitOrder
      </button>
    </form>
  );
}

export default ColumSelect;

/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useContext } from 'react';
import MayContext from '../context/MayContext';

function Table() {
  const { filters: { dataFilters },
    filterValues: { dataFilters2 } } = useContext(MayContext);

  if (dataFilters === undefined) {
    return 'carregando...';
  }

  function table1() {
    const bord = '1px solid black';
    return (
      <tbody>

        {dataFilters && dataFilters.map((dat, index) => (
          <tr key={ index }>
            <td style={ { border: bord } }>{ dat.name }</td>
            <td style={ { border: bord } }>{dat.orbital_period}</td>
            <td style={ { border: bord } }>{dat.population}</td>
            <td style={ { border: bord } }>{dat.rotation_period}</td>
            <td style={ { border: bord } }>{dat.surface_water}</td>
            <td style={ { border: bord } }>{dat.terrain}</td>
            <td style={ { border: bord } }>{dat.climate}</td>
            <td style={ { border: bord } }>{dat.created}</td>
            <td style={ { border: bord } }>{dat.diameter}</td>
            <td style={ { border: bord } }>{dat.edited}</td>
            <td style={ { border: bord } }>{dat.films}</td>
            <td style={ { border: bord } }>{dat.gravity}</td>
            <td style={ { border: bord } }>{dat.url}</td>

          </tr>
        ))}

      </tbody>
    );
  }

  function table2() {
    const bord = '1px solid black';
    return (

      <tbody>
        {dataFilters2 && dataFilters2.map((dat2, index) => (
          <tr key={ index }>
            <td style={ { border: bord } }>{ dat2.name }</td>
            <td style={ { border: bord } }>{dat2.orbital_period}</td>
            <td style={ { border: bord } }>{dat2.population}</td>
            <td style={ { border: bord } }>{dat2.rotation_period}</td>
            <td style={ { border: bord } }>{dat2.surface_water}</td>
            <td style={ { border: bord } }>{dat2.terrain}</td>
            <td style={ { border: bord } }>{dat2.climate}</td>
            <td style={ { border: bord } }>{dat2.created}</td>
            <td style={ { border: bord } }>{dat2.diameter}</td>
            <td style={ { border: bord } }>{dat2.edited}</td>
            <td style={ { border: bord } }>{dat2.films}</td>
            <td style={ { border: bord } }>{dat2.gravity}</td>
            <td style={ { border: bord } }>{dat2.url}</td>

          </tr>
        ))}
      </tbody>
    );
  }

  return (

    <table style={ { border: '2px solid black', cellspacing: '20', width: '260' } }>
      <thead>
        <tr>
          <th>Name</th>
          <th>Orbital_Period</th>
          <th>Population</th>
          <th>Rotation_Period</th>
          <th>Surface_Water</th>
          <th>Terrain</th>
          <th>Climate</th>
          <th>Created</th>
          <th>Diameter</th>
          <th>Edited</th>
          <th>Films</th>
          <th>Gravity</th>
          <th>Url</th>
        </tr>
      </thead>

      {dataFilters2 === undefined ? table1() : table2()}

    </table>

  );
}
export default Table;

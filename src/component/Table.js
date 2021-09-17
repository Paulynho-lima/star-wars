/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useContext } from 'react';
import mayContext from '../context/MayContext';

function Table() {
  const { data } = useContext(mayContext);
  /* if (data === undefined) {
    return 'carregando...';
  } */

  const bord = '1px solid black';
  return (
    <div>
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
        <tbody>
          { data && data.map((dat, index) => (
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

      </table>

    </div>
  );
}

export default Table;

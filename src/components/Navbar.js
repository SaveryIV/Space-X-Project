import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <header>
    <div className="title">
      <div className="container-title">
        <h1 className="store">Space X</h1>
        <ul>
          <li>
            <NavLink to="/" className="current">Home</NavLink>
          </li>
          <li>
            <NavLink to="/rockets" className="current">Rockets</NavLink>
          </li>
          <li>
            <NavLink to="/missions" className="current">Missions</NavLink>
          </li>
        </ul>
      </div>
    </div>
  </header>
);

export default Navbar;

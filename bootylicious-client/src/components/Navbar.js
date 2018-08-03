import React from 'react';
import { NavLink } from 'react-router-dom';

  const Navbar = () =>
      <div className="navbar-container">
        <NavLink className="nav-item" to="/workouts/new">add workout</NavLink>
        <NavLink className="nav-item" to="/workouts">view workouts</NavLink>
        <NavLink className="nav-item" to="/">home</NavLink>
      </div>


export default Navbar;

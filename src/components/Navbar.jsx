import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
      <nav className="navigation">
        <ul>
          <li>
            <NavLink exact to="/" activeClassName="nav-active">
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/favoris" activeClassName="nav-active">
              Favoris
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/event" activeClassName="nav-active">
              Liste des événements
            </NavLink>
          </li>
        </ul>
      </nav>
    );
  };
  
  export default NavBar;
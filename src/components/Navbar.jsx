import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
      <nav>
        <ul className="navigation">
          <li>
            <NavLink exact to="/" activeClassName="nav-active">
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/event" activeClassName="nav-active">
              Liste des événements
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/favorites" activeClassName="nav-active">
              Favoris
            </NavLink>
          </li>
        </ul>
      </nav>
    );
  };
  
  export default NavBar;
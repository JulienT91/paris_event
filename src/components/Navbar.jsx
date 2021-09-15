import React from "react";
import { NavLink } from "react-router-dom";
import {AiTwotoneHome} from "react-icons/ai";


const NavBar = () => {
    return (
    <div className="navBar-container">
      <h1>Paris Event</h1>
      <nav>
        <ul className="navigation">
          <li>
            <NavLink exact to="/" activeClassName="nav-active">
              <AiTwotoneHome/>Accueil
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/search" activeClassName="nav-active">
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
      </div>
    );
  };
  
  export default NavBar;
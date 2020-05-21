import React from "react";
import "../styles/Header.css";
import { NavLink } from "react-router-dom";

function Header(){
  return (
    <nav className="Nav">
      <div className="Nav-menus">
      <div className="Nav-brand">
        </div>
        <nav>
          <NavLink to="/">
            <button> Main </button>
          </NavLink>
          <NavLink to="/posts/new">
            <button> New Post </button>
          </NavLink>
          <NavLink to="/users/new">
            <button> New User </button>
          </NavLink>
        </nav>
      </div>
    </nav>
       );
  
}
export default Header;
import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";

function Header(){
  return (
    <nav className="Nav">
      <div className="Nav-menus">
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
        
        <div className="Nav-brand">
          <a className="Nav-brand-logo" href="/">
            What I Watched
          </a>
        </div>
      </div>
    </nav>
       );
  
}
export default Header;
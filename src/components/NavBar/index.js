import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <NavLink exact to="/">
        Home
      </NavLink>
      <NavLink exact to="/about">
        About
      </NavLink>
      <NavLink exact to="/discover">
        Discover
      </NavLink>
    </div>
  );
}

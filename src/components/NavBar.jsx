import React from "react";
import "./Navbar.css";

const NavBar = () => {
  return (
    <header className="navbar">
      <h2 className="logo">User Directory</h2>

      <nav className="nav-links">
        <a href="#">Home</a>
        <a href="#">Users</a>
        <a href="#">About</a>
      </nav>
    </header>
  );
};

export default NavBar;

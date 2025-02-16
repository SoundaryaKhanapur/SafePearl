import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-logo">
        <h1>SavePearl</h1>
      </div>
      <div className="nav-menu" onClick={() => setDropdownOpen(!dropdownOpen)}>
        &#9776; {/* Hamburger Icon */}
      </div>
      {dropdownOpen && (
        <ul className="nav-dropdown">
          <li>
            <Link to="/" onClick={() => setDropdownOpen(false)}>Home</Link>
          </li>
          <li>
            <Link to="/checkpolicies" onClick={() => setDropdownOpen(false)}>Check Policies</Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Nav;

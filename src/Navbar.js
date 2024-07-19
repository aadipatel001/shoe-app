
import React from 'react';

import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li>
          <a>Home</a>
        </li>
        <li>
          <a >Category</a>
        </li>
        <li>
          <a >About us</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
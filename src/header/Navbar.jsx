// Navbar.js
import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav>
      {/* Logo */}
      <a href="/">
        <img
          src="https://images.bewakoof.com/web/ic-desktop-normal-bwkf-logo.svg"
          alt="Logo"
        />
      </a>

      {/* Navigation Links */}
      <a href="/">Men</a>
      <a href="/">Women</a>
      <a href="/">Mobile Covers</a>

      <div className="login">
        <a href="/">Login</a>
      </div>

      {/* Search Bar */}
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
      </div>

      {/* Cart Icon */}
      <div className="cart-icon">
        <img src="path/to/cart-icon.png" alt="Cart" />
        <div className="cart-count">0</div>
      </div>

      {/* Flag */}
      <div className="flag">
        <img
          src="https://www.pngfind.com/pngs/m/12-120175_indian-flag-regional-circle-indian-flag-in-circle.png"
          alt="Indian Flag"
        />
      </div>
    </nav>
  );
};

export default Navbar;

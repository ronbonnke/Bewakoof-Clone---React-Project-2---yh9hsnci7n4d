// Navbar.js
import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav>
     
      <a href="/">
        <img
          src="https://images.bewakoof.com/web/ic-desktop-normal-bwkf-logo.svg"
          alt="Logo"
        />
      </a>

   
      <a href="/">Men</a>
      <a href="/">Women</a>
      <a href="/">Mobile Covers</a>


     
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
      </div>


      <div className="cart-icon">
        <img src="https://shop.bewakoof.com/cdn/shop/t/3/assets/icon-cart-mobile.svg?v=134184629154633135331696418236" alt="Cart" />
        <div className="cart-count">0</div>
      </div>

      <div className="login">
        <a href="/">Login</a>
      </div>

      
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

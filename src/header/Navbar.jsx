import React from 'react';
import '../styles/navbar/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
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
      <a href="/">MobileCovers</a>

      {/* Search Bar */}
      <div className="search-bar">
        <input
          type="text"
          className="search-input"
          placeholder="Search by products"
        />
      </div>

      {/* Wishlist Icon */}
      <div className="wishlist-icon">
        <img
          src="https://shop.bewakoof.com/cdn/shop/t/3/assets/icon-wishlist-desktop.svg?v=138385657585356751091690205653"
          alt="Wishlist"
        />
        <span className="wishlist-text">Wishlist</span>
      </div>

      {/* Cart Icon */}
      <div className="cart-icon">
        <img
          src="https://shop.bewakoof.com/cdn/shop/t/3/assets/icon-cart-mobile.svg?v=134184629154633135331696418236"
          alt="Cart"
        />
        <div className="cart-count">0</div>
      </div>

      {/* Login */}
      <div className="login">
        <a href="/">Login</a>
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

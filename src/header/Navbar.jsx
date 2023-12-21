import React from 'react';
import '../styles/navbar/Navbar.css';
import { Link, useNavigate} from 'react-router-dom';
import { useCurrentContext } from '../context/CurrentProvider';



const Navbar = () => {
  const navigate = useNavigate(); 
  const {loginStatus, setLoginStatus} = useCurrentContext();
  const handleLogout = () => {
    localStorage.clear();
    setLoginStatus(false);
    navigate('/login');
  }

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
      <a href="/Mens">Mens</a>
      <a href="/Womens">Womens</a>
      <a href="/comingsoon">MobileCovers</a>

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
        {/* <Link to={"/login"}> */}
        {loginStatus ? (
        <button onClick={handleLogout}>Logout</button>
      ) : (
        <Link to="/login">
          <button>Login</button>
        </Link>
      )}
          
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

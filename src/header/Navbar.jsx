import React,{useState} from 'react';
import '../styles/navbar/Navbar.css';
import { Link, useNavigate} from 'react-router-dom';
import { useCurrentContext } from '../context/CurrentProvider';
// import { Link } from 'react-router-dom';

import SearchBar from '../components/SearchBar';
import Suggestions from '../components/Suggestions';
const Navbar = () => {
  const navigate = useNavigate(); 
  const {loginStatus, setLoginStatus} = useCurrentContext();
  const {forInput} = useCurrentContext();
  const [value, setValue] = useState();
  const [suggestions,setSuggestions] = useState([]);
  const handleLogout = () => {
    localStorage.clear();
    setLoginStatus(false);
    navigate('/login');
  }
  const handleInput = (e) =>{
    setValue(e.target.value);
   console.log("value",  value)
   console.log("forinput", forInput)
   const filteredSuggestions = forInput.filter((item) => {
    const lowerCasedInput = value?.toLowerCase();

    return (
      item.name.toLowerCase().includes(lowerCasedInput) ||
      (item.color && item.color.toLowerCase().includes(lowerCasedInput)) ||
      (item.sellerTag &&
        item.sellerTag.toLowerCase().includes(lowerCasedInput)) ||
      (item.subCategory &&
        item.subCategory.toLowerCase().includes(lowerCasedInput))
    );
  });
  setSuggestions(filteredSuggestions);

  }
console.log("suggestions",suggestions)


  return (
    <nav className="navbar">
      {/* Logo */}
      <Link to="/">
        <img
          src="https://images.bewakoof.com/web/ic-desktop-normal-bwkf-logo.svg"
          alt="Logo"
        />
      </Link>

      {/* Navigation Links */}
      <Link to="/men">Mens</Link>
      <Link to="/women">Womens</Link>
      <Link to="/comingsoon">MobileCovers</Link>

      {/* Search Bar */}
      
      {/* <SearchBar /> */}

      <div className="search-bar">
        <input
          type="text"
          className="search-input"
          placeholder="Search by products"
          onChange={handleInput}
        />
      </div>
      {suggestions ?  <Suggestions suggestions={suggestions} setSuggestions={setSuggestions}/> : " "}
     {/* <Suggestions suggestions={suggestions}/> */}
      {/* Wishlist Icon */}
      <Link to={"/wishlist"}>
      <div className="wishlist-icon">
        <img
          src="https://shop.bewakoof.com/cdn/shop/t/3/assets/icon-wishlist-desktop.svg?v=138385657585356751091690205653"
          alt="Wishlist"
        />
        <span className="wishlist-text">Wishlist</span>
      </div></Link>

      {/* Cart Icon */}
      <Link to={"/cart"}>
      <div className="cart-icon">
        <img
          src="https://shop.bewakoof.com/cdn/shop/t/3/assets/icon-cart-mobile.svg?v=134184629154633135331696418236"
          alt="Cart"
        />
        <div className="cart-count">0</div>
      </div></Link>

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

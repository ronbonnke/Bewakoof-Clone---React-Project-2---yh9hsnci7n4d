import "./App.css";
import Navbar from "./header/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="my-webpage">
        <Navbar />
        <Routes>
          <Route path="/men">Men</Route>
          <Route path="/women">Women</Route>
          <Route path="/MobileCovers">MobileCovers</Route>
          <Route path="/Search">Search</Route>
          <Route path="/wishlist">Wishlist</Route>
          <Route path="/Cart">Cart</Route>
          <Route path="/login">Login</Route>
          <Route path="/logout">Logout</Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

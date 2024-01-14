import "./App.css";
import Navbar from "./header/Navbar";
import Footer from "./footer/Footer";
import Homepage from "./pages/Homepage";
import Login from "./components/Login";
import Register from "./components/Register";
import UpdatePassword from "./components/ForgotPassword";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CurrentProvider from "./context/CurrentProvider";
import Mens from "./pages/Mens";
import Womens from "./pages/Womens";
import Product from "./pages/Product";
import ComingSoon from "./pages/Comingsoon";
import WishList from "./pages/WishList";
import SearchBar from "./components/SearchBar";
import Profile from "./pages/Profile";
import Cart from "./pages/Cart";
import CardTable from "./components/CardTable";
import SearchCategories from "./pages/SearchCategories";
import Orders from "./pages/Orders";
import Address from "./pages/Address";
import Payment from "./pages/Payment";
import PaymentMethod from "./components/PaymentMethod";
function App() {
  return (
    <Router>
      <CurrentProvider>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/password" element={<UpdatePassword />} />
            <Route path="/men" element={<Mens />} />
            <Route path="/women" element={<Womens />} />
            <Route path="/Product/:_id" element={<Product />} />
            <Route path="/comingsoon" element={<ComingSoon />} />
            <Route path="/winterwear" element={<ComingSoon />} />
            <Route path="/wishlist" element={<WishList />} />
            <Route path="/searchbar" element={<SearchBar />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/cardtable" element={<CardTable />} />
            <Route path="/search/:inputValue" element={<SearchCategories />} />
            <Route path="/order" element={<Orders />} />
            <Route path="/address" element={<Address />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/paymentmethod" element={<PaymentMethod />} />
          </Routes>
        </div>
        <div className="my-footer">
          <Footer />
        </div>
      </CurrentProvider>
    </Router>
  );
}

export default App;

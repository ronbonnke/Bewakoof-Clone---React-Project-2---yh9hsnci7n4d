import "./App.css";
import Navbar from "./header/Navbar";
import Footer from "./footer/Footer";
import Homepage from "./pages/Homepage";
import Login from "./components/Login";
import Register from "./components/Register";
import UpdatePassword from "./components/ForgotPassword";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="my-header">
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/password" element={<UpdatePassword />} />
        </Routes>
      </div>
      <div className="my-footer">
        <Footer />
      </div>
    </Router>
  );
}

export default App;

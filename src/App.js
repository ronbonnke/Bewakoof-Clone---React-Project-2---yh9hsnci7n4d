import "./App.css";
import Navbar from "./header/Navbar";
import Footer from "./footer/Footer";
import Homepage from "./pages/Homepage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="my-header">
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
      </div>
      <div className="my-footer">
        <Footer />
      </div>
    </Router>
  );
}

export default App;

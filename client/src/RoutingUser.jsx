import React from "react";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import AddToCart from './pages/AddToCart'
import Home from "./pages/Home";
import Footer from "./components/Footer";
import TShirts from "./categories/T-Shirts";
import Shirts from "./categories/Shirts";
import Hoodies from "./categories/Hoodies";
import Jackets from "./categories/Jackets";
import Sweaters from "./categories/Sweaters";
import Blazers from "./categories/Blazers";

function RoutingUser() {
  return (
    <div>
      {/* Set Navbar to fixed and give content padding to avoid overlapping */}
      <Navbar />
      <div> {/* Adjust padding as per your navbar height */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user-cart" element={<AddToCart />} />
          <Route path="/t-shirts" element={<TShirts />} />
          <Route path="/shirts" element={<Shirts />} />
          <Route path="/hoodies" element={<Hoodies />} />
          <Route path="/sweaters" element={<Sweaters />} />
          <Route path="/jackets" element={<Jackets />} />
          <Route path="/blazers" element={<Blazers />} />
          {/* Add more routes as needed */}
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default RoutingUser;

import "./App.css";
import Sellers from "./Components/Sellers/Sellers";
import PropertiesToLet from "./Components/Let/PropertiesToLet";
import Buyers from "./Components/Buyers/Buyers";
import PropertiesForSale from "./Components/Sale/PropertiesForSale";
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./Components/Home";
import BuyersPT from "./Components/Buyers/BuyersPT";
import SellersPT from "./Components/Sellers/SellersPT";
import PropertiesToLetPT from "./Components/Let/PropertiesToLetPT";
import PropertiesForSalePT from "./Components/Sale/PropertiesForSalePT";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "bootstrap/dist/js/bootstrap.min.js";
import BookingLet from "./Components/Let/BookingLet";
import BookingSale from "./Components/Sale/BookingSale";
import Logo from "./Logo.png"
import EditPropertyForSale from "./Components/Sale/EditPropertyForSale";
import EditPropertyToLet from "./Components/Let/EditPropertyToLet";

function App() {
  return (
    <header>
      <Router>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              <img
                src={Logo}
                alt="Logo"
                width="35%"
                height="35%"
                className="d-inline-block align-text-middle"
              />{" "}
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/Buyers">
                    Buyers
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/Sellers">
                    Sellers
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button onClick"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Properties
                  </a>
                  <div className="dropdown-menu">
                    <a className="dropdown-item" href="/PropertiesToLet">
                      To Let
                    </a>
                    <a className="dropdown-item" href="/PropertiesForSale">
                      For Sale
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {/* className="navbar navbar-expand-lg bg-body-tertiary" >
          <div class= "container-fluid" >
            <a className="navbar-brand" href="/"> </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"></button>
            </div>
            


          
          <Link to="/">Home</Link>
          <Link to="/Buyers">Buyers</Link>
          <Link to="/Sellers">Sellers</Link>
          <Link to="/PropertiesForSale">Sale</Link>
          <Link to="/PropertiesToLet">Let</Link> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Sellers" element={<Sellers />} />
          <Route path="/Buyers" element={<Buyers />} />
          <Route path="/PropertiesForSale" element={<PropertiesForSale />} />
          <Route path="/PropertiesToLet" element={<PropertiesToLet />} />
          <Route path="/PropertiesToLet/BookingLet/:id" element={<BookingLet />} />
          <Route path="/PropertiesForSale/BookingSale/:id" element={<BookingSale />} />
          <Route path="/PropertiesForSale/edit/:id" element={<EditPropertyForSale />} />
          <Route path="/PropertiesToLet/edit/:id" element={<EditPropertyToLet />} />
        </Routes>
      </Router>
    </header>
  );
}
export default App;

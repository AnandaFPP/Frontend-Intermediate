import React from "react";
import { Link } from "react-router-dom";
// import Style from "./style.module.css";

const Navbar = () => {
  return (
    <>
      <style>
        font-family: "Metropolis"; overflow-x: hidden;
        {"}"}
        .rounded-pill {"{"}
        width: 100px;
        {"}"}
        .container {"{"}
        margin-top: 5px;
        {"}"}
        .carousel {"{"}
        width: 600px; display: block; margin-left: auto; margin-right: auto;
        margin-top: 100px;
        {"}"}
        .input {"{"}
        width: 50vh; border-radius: 20px;
        {"}"}p {"{"}
        color: #9b9b9b;
        {"}"}
        .search-logo {"{"}
        position: absolute; margin-top: 10px; margin-left: 367px;
        {"}"}
        .filter-logo {"{"}
        border: 1px #8e8e93 solid; padding: 8px; border-radius: 10px;
        {"}"}
        a:link, a:visited {"{"}
        text-decoration: none !important; color: black; cursor: pointer
        !important;
        {"}"}
        .cart {"{"}
        font-size: 20px; margin-right: 24px; color: #8e8e93;
        {"}"}
        .bell {"{"}
        font-size: 20px; margin-right: 24px; color: #8e8e93;
        {"}"}
        .message {"{"}
        font-size: 20px; margin-right: 24px; color: #8e8e93;
        {"}"}
        .profile {"{"}
        font-size: 20px; margin-right: 24px; color: #8e8e93;
        {"}"}
        .price {"{"}
        font-size: 30px; margin-top: -20px; font-weight: bold; color: black;
        {"}"}
        @media only screen and (max-width: 600px) {"{"}
        .category {"{"}
        display: block; margin-left: auto; margin-right: auto;
        {"}"}
        .squer {"{"}
        display: none;
        {"}"}
        {"}"}
        @media only screen and (max-width: 1000px) {"{"}
        .search-logo {"{"}
        display: none;
        {"}"}
        .input {"{"}
        width: 100%;
        {"}"}
        {"}"}
        a:link, a:visited {"{"}
        text-decoration: none !important; color: black; cursor: pointer
        !important;
        {"}"}
        .navbar {"{"}
        box-shadow: 0px 6px 40px 20px rgba(173, 173, 173, 0.25);
        {"}"}
      </style>
      <nav className="navbar fixed-top bg-light navbar-expand-lg navbar-light ">
        <div className="container ">
          <Link to="/home">
            <a href="index.html">
              <img
                className="logo mr-4"
                src={require("../assets/image/logo.png")}
                alt="logo"
              />
            </a>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarScroll"
            aria-controls="navbarScroll"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarScroll">
            <ul
              className="navbar-nav mr-auto my-2 my-lg-0 navbar-nav-scroll"
              style={{ maxHeight: 100 }}
            >
              <li className="nav-item active">
                <form className="d-flex">
                  <input
                    // className={`${Style.input} form-control mr-2`}
                    className="form-control mr-2 input"
                    type="search "
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <img
                    className="search-logo"
                    src={require("../assets/image/Search Glyph.png")}
                    alt=""
                  />
                </form>
              </li>
              <li className="nav-item squer">
                <img
                  className="filter-logo"
                  src={require("../assets/image/filter.jpg")}
                  alt="filter"
                />
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0 row justify-content-center">
              <Link to="/order">
                <a href="/pages/order.html">
                  <img
                    className="mr-5"
                    src={require("../assets/image/shopping-cart.png")}
                    alt="cart"
                  />
                </a>
              </Link>
              <Link to="/login">
                <button className="btn btn-danger rounded-pill mr-3 text-light">
                  Login
                </button>
              </Link>
              <Link to="/register">
                <button className="btn border rounded-pill mr">
                  <a href="/pages/signup.html" className="text-secondary">
                    Signup
                  </a>
                </button>
              </Link>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

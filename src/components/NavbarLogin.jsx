import React from "react";

const NavbarLogin = () => {
  return (
    <>
      <style>
        body {"{"}
        overflow-x: hidden;
        {"}"}
        .input {"{"}
        width: 50vh; border-radius: 20px;
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
        @media only screen and (max-width: 600px) {"{"}
        .squer {"{"}
        display: none;
        {"}"}
        .search-logo {"{"}
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
        .squer {"{"}
        display: none;
        {"}"}
        {"}"}
        .text {"{"}
        color: #8e8e93;
        {"}"}
        .navbar {"{"}
        box-shadow: 0px 6px 40px 20px rgba(173, 173, 173, 0.25);
        {"}"}
        .product {"{"}
        width: 100%;
        {"}"}
      </style>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          <a href="index.html">
            <img
              className="logo mr-4"
              src={require("../image/logo.png")}
              alt="logo"
            />
          </a>
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
                    className="form-control mr-2 input"
                    type="search "
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <img
                    className="search-logo"
                    src={require("../image/Search Glyph.png")}
                    alt=""
                  />
                </form>
              </li>
              <li className="nav-item squer">
                <img
                  className="filter-logo"
                  src={require("../image/filter.jpg")}
                  alt="filter"
                />
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0 row justify-content-center">
              <a
                href="/pages/order.html"
                className="text"
                style={{ padding: "0 15px", color: "#8e8e93" }}
              >
                <i className="bi bi-cart2" />
              </a>
              <a
                href="#"
                className="text"
                style={{ padding: "0 15px", color: "#8e8e93" }}
              >
                <i className="bi bi-bell" />
              </a>
              <a
                href="#"
                className="text"
                style={{ padding: "0 15px", color: "#8e8e93" }}
              >
                <i className="bi bi-envelope" />
              </a>
              <a
                href="/pages/login.html"
                className="text"
                style={{ padding: "0 15px", color: "#8e8e93" }}
              >
                <img src={require("../image/PhotoPf.png")} alt="" />
              </a>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavbarLogin;

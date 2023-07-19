import React from "react";
import NavbarLogin from "../components/NavbarLogin";
import { Link } from "react-router-dom";

const Order = () => {
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
      </style>
      <NavbarLogin />
      <div className="container mt-5">
        <h3 style={{ fontWeight: 600 }}>My bag</h3>
        <div className="row">
          <div className="col-md-8 justify-content-center">
            <div
              className="product row mt-3 ml-0 col-12"
              style={{
                boxShadow: "0px 0px 10px #29292940, 0px 0px 25px #fff",
                borderRadius: 10,
                padding: "10px 0",
              }}
            >
              <div className="col-md-1 col-2 d-flex">
                <input
                  type="checkbox"
                  className="checkbox"
                  name="checkbox"
                  id="cb"
                />
              </div>
              <div className="col-md-9 col-7 pt-3">
                <p className="teks card-title" style={{ fontWeight: 600, color: "black"}}>
                  Select all items <span className="text-secondary"> (2 items selected)</span>
                </p>
              </div>
              <div className="col-md-2 col-3 pt-3">
                <p className="delete card-title text-danger">Delete</p>
              </div>
            </div>
            <div
              className="product row mt-3 ml-0 col-12"
              style={{
                boxShadow: "0px 0px 10px #29292940, 0px 0px 25px #fff",
                padding: "10px 0",
                borderRadius: 10,
              }}
            >
              <div className="col-md-1 col-2 d-flex">
                <input
                  type="checkbox"
                  className="checkbox"
                  name="checkbox"
                  id="cb"
                />
              </div>
              <div className="col-md-5 col-10">
                <div className="row">
                  <img
                    src={require("../assets/image/clothmybag.png")}
                    alt="cloth"
                    style={{ borderRadius: 10 }}
                    crossOrigin="anonymous"
                  />
                  <div className="text1 ml-3">
                    <h6 style={{ fontWeight: 600 }}>
                      Men's formal suit - Black
                    </h6>
                    <p className="text">Zalora cloth</p>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-6 pt-1">
                <div className="items row container">
                  <img src={require("../assets/image/quantity.png")} alt=""/>
                </div>
              </div>
              <div className="col-md-3 pt-3 col-6">
                <p className="text-dark" style={{ fontWeight: 800 }}>
                  Rp. 250.000
                </p>
              </div>
            </div>
            <div
              className="product row mt-3 ml-0"
              style={{
                boxShadow: "0px 0px 10px #29292940, 0px 0px 25px #fff",
                borderRadius: 10,
                padding: "10px 0",
              }}
            >
              <div className="col-md-1 col-2 d-flex">
                <input
                  type="checkbox"
                  className="checkbox"
                  name="checkbox"
                  id="cb"
                />
              </div>
              <div className="col-md-5 col-10">
                <div className="row">
                  <img
                    src={require("../assets/image/kemal-alkan-_BDBEP0ePQc-unsplash 1.png")}
                    alt="cloth"
                    style={{ borderRadius: 10 }}
                  />
                  <div className="text1 ml-3">
                    <h6 style={{ fontWeight: 600 }}>Men's Jacket Jeans</h6>
                    <p className="text">Zalora cloth</p>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-6 pt-1">
                <div className="items row container">
                  <img src={require("../assets/image/quantity.png")} alt="" />
                </div>
              </div>
              <div className="col-md-3 col-6 pt-3">
                <p className="text-dark" style={{ fontWeight: 800 }}>
                  Rp. 250.000
                </p>
              </div>
            </div>
          </div>
          <div className="container col-md-4 col-sm-6 mb-5 mt-3">
            <div
              className="container product"
              style={{
                boxShadow: "0px 0px 10px #29292940, 0px 0px 25px #fff",
                padding: 20,
                borderRadius: 5,
              }}
            >
              <h4 style={{ fontWeight: 600 }}>Shopping summary</h4>
              <div className="row mt-4 prices">
                <p className="col-md-8 col-sm-1" style={{ color: "#8e8e93" }}>
                  Total price
                </p>
                <p
                  className="col-md-3 col-sm-2 text-dark"
                  style={{ fontWeight: 800 }}
                >
                  Rp.500.000
                </p>
              </div>
              <Link to="/checkout">
                <a href="/" style={{ color: "#fff" }}>
                  <button
                    className="btn btn-danger btn-lg btn-block"
                    type="button"
                  >
                    Buy
                  </button>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Order;

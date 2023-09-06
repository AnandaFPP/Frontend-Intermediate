import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Login = () => {
  // let [email, setEmail] = useState('');
  // let [password, setPassword] = useState('');
  const [data, setData] = useState({
    customer_email: "",
    customer_pass: "",
  });

  const [dataSeller, setDataSeller] = useState({
    seller_email: "",
    seller_pass: "",
  });

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleChangeSeller = (e) => {
    setDataSeller({
      ...dataSeller,
      [e.target.name]: e.target.value,
    });
  };

  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });

  const handleLogin = (e) => {
    e.preventDefault();
    axios
      .post(`${process.env.REACT_APP_API_URL}/customer/login`, data)
      .then((res) => {
        if (res.data.statusCode === 200) {
          Toast.fire({
            title: "You are now logged in.",
            icon: "success",
          }).then(function () {
            // Redirect the user
            localStorage.setItem("user_token", res.data.data.user_token);
            localStorage.setItem("customer_id", res.data.data.customer_id);
            window.location.href = "/";
          });
        } else if (res.data.message === "User is unverify!") {
          Toast.fire({
            title:
              "Welcome to Blanja! To activate your account, click the verification link sent to your email address.",
            icon: "success",
          });
        } else {
          Toast.fire({
            title: "Sorry, your email or password is incorrect.",
            icon: "error",
          }).then(function () {
            // Redirect the user
            window.location.href = "/login";
          });
        }
      })
      .catch((err) => {
        console.log(err.response);
        alert("gagal register");
      });
  };

  const handleLoginSeller = (e) => {
    e.preventDefault();
    axios
      .post(`${process.env.REACT_APP_API_URL}/seller/login`, dataSeller)
      .then((res) => {
        if (res.data.statusCode === 201) {
          Toast.fire({
            title: "You are now logged in.",
            icon: "success",
          })
          .then(function () {
            // Redirect the user
            localStorage.setItem("user_token", res.data.data.user_token);
            localStorage.setItem("seller_id", res.data.data.seller_id);
            window.location.href = "/";
          });
        } else {
          Toast.fire({
            title: "Sorry, your email or password is incorrect.",
            icon: "error",
          }).then(function () {
            // Redirect the user
            window.location.href = "/login";
          });
        }
      })
      .catch((err) => {
        console.log(err.response);
        alert("gagal register");
      });
  };

  return (
    <>
      <style>
        .text-regis {"{"}
        text-align: center; padding-top: 1em;
        {"}"}
        .container, .container-lg, .container-md, .container-sm, .container-xl{" "}
        {"{"}
        max-width: 450px; position: absolute; top: 50%; left: 50%; margin-right:
        -50%; transform: translate(-50%, -50%);
        {"}"}
        .nav-pills .nav-link.active, .nav-pills .show &gt; .nav-link {"{"}
        color: #fff; background-color: #c82333;
        {"}"}
        .nav-pills .nav-link {"{"}
        width: 100px;
        {"}"}
        img {"{"}
        display: block; margin-left: auto; margin-right: auto;
        {"}"}
        a:link, a:visited {"{"}
        text-decoration: none !important; color: white; cursor: pointer
        !important;
        {"}"}
      </style>
      <div className="container">
        <img src={require("../../assets/image/logo.png")} alt="Logo" />
        <p
          className="text-center py-3"
          style={{ fontWeight: "bold", color: "black" }}
        >
          Please login with your account
        </p>
        <ul
          className="nav nav-pills mb-3 justify-content-center"
          id="pills-tab"
          role="tablist"
        >
          {/* Customer */}
          <li className="nav-item" role="presentation">
            <button
              className="nav-link active"
              id="pills-home-tab"
              data-toggle="pill"
              data-target="#pills-home"
              type="button"
              role="tab"
              aria-controls="pills-home"
              aria-selected="true"
            >
              Customer
            </button>
          </li>
          {/* Seller */}
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="pills-seller-tab"
              data-toggle="pill"
              data-target="#pills-seller"
              type="button"
              role="tab"
              aria-controls="pills-seller"
              aria-selected="false"
            >
              Seller
            </button>
          </li>
        </ul>
        <div
          className="tab-content"
          id="pills-tabContent"
          style={{ marginTop: 35 }}
        >
          {/* Customer */}
          <div
            className="tab-pane fade show active"
            id="pills-home"
            role="tabpanel"
            aria-labelledby="pills-home-tab"
          >
            <form onSubmit={handleLogin}>
              <div className="form-group">
                <input
                  name="customer_email"
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  value={data.customer_email}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <input
                  name="customer_pass"
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  value={data.customer_pass}
                  onChange={handleChange}
                />
              </div>
              <button className="btn btn-danger btn-block rounded-pill">
                <a href="/src/pages/Home.jsx"> Primary </a>
              </button>
            </form>
          </div>
          {/* Seller */}
          <div
            className="tab-pane fade show"
            id="pills-seller"
            role="tabpanel"
            aria-labelledby="pills-seller-tab"
          >
            <form onSubmit={handleLoginSeller}>
              <div className="form-group">
                <input
                  name="seller_email"
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  value={dataSeller.seller_email}
                  onChange={handleChangeSeller}
                />
              </div>
              <div className="form-group">
                <input
                  name="seller_pass"
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  value={dataSeller.seller_pass}
                  onChange={handleChangeSeller}
                />
              </div>
              <button className="btn btn-danger btn-block rounded-pill">
                <a href="/src/pages/Home.jsx"> Primary </a>
              </button>
            </form>
          </div>
          <div className="form-group row d-flex flex-row-reverse mt-3 mr-2">
            <Link to="/reset">
              <a
                href="/src/pages/Auth/Reset.jsx"
                className="text-danger border"
              >
                Forgot password?
              </a>
            </Link>
            <p className="text-regis">
              Don't have a Tokopedia account?
              <Link to="/register">
                <a href="/src/pages/Auth/Register.jsx" className="text-danger">
                  {" "}
                  Register{" "}
                </a>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

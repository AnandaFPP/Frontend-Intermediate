import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Register = () => {

  let [dataCustomer, setDataCustomer] = useState({
    customer_name: "",
    customer_email: "",
    customer_pass: "",
  })

  const [dataSeller, setDataSeller] = useState({
    seller_name: "",
    seller_email: "",
    seller_phone: "",
    seller_password: "",
    seller_description: "",
    seller_store: "",
  });

  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    timerProgressBar: true,
    showConfirmButton: false,
    timer: 2000,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  })
  
  let handleChangeCustomer = (e) => {
    setDataCustomer({
      ...dataCustomer,
      [e.target.name]: e.target.value
    })
  };

  let handleChangeSeller = (e) => {
    setDataSeller({
      ...dataSeller,
      [e.target.name]: e.target.value
    })
  };


  let handleRegisterSeller = (e) => {
    e.preventDefault();
    axios
      .post(`${process.env.REACT_APP_API_URL}/seller/register`, dataSeller)
      .then((res) => {
        if (res.data.statusCode === 201) {
          Toast.fire({
            title:
              "Signup successfully as a Seller!",
            icon: "success",
          })
          .then(function () {
            window.location.href = "/login";
          });
        } else {
          Toast.fire({
            title: "Sorry, please check again email and password that you input",
            icon: "error",
          })
          .then(function () {
            window.location.href = "/signup";
          });
        }
        // consolog(res);
        // alert("Register successful!");
        // navigate("/login");
        // window.location.reload();le.
      })
      .catch((err) => {
        alert(err);
      });
  }

  let handleRegisterCustomer = (e) => {
    e.preventDefault();
    axios
      .post(`${process.env.REACT_APP_API_URL}/customer/register`, dataCustomer)
      .then((res) => {
        if (res.data.statusCode === 201) {
          Toast.fire({
            title:
              "Congratulations! Your account has been successfully created. Please check your email for further instructions",
            icon: "success",
          }).then(function () {
            // Redirect the user
            window.location.href = "/login";
          });
        } else {
          Toast.fire({
            title: "Sorry, this email is already registered.",
            icon: "error",
          }).then(function () {
            // Redirect the user
            window.location.href = "/signup";
          });
        }
        // consolog(res);
        // alert("Register successful!");
        // navigate("/login");
        // window.location.reload();le.
      })
      .catch((err) => {
        alert(err);
      });
  }

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
      {/* <div className="container metropolis">
        <img src={require("../../assets/image/logo.png")} alt="Logo" />
        <p className="text-center py-3" style={{ fontWeight: "bold", color: "black" }}>
          Please sign up with your account
        </p>
        <div className="tab-content" id="myTabContent">
          <div
            className="tab-pane fade show active text-center"
            id="customer"
            role="tabpanel"
            aria-labelledby="customer-tab"
          >
            <form onSubmit={handleRegister}>
              <div className="form-group">
                <div
                  className="btn-group btn-group-toggle"
                  data-toggle="buttons"
                  value={data.role}
                  onChange={handleChange}
                >
                  <label
                    className="btn btn-secondary active"
                    style={{
                      backgroundColor: "#DB3022",
                      borderColor: "#DB3022",
                    }}
                  >
                    <input
                      type="radio"
                      name="role"
                      id="option1"
                      autoComplete="off"
                      defaultChecked=""
                      value={"customer"}
                    />{" "}
                    Customer
                  </label>
                  <label
                    className="btn btn-secondary"
                    style={{
                      paddingLeft: "26px",
                      paddingRight: "26px",
                      backgroundColor: "#DB3022",
                      borderColor: "#DB3022",
                    }}
                  >
                    <input
                      type="radio"
                      name="role"
                      id="option2"
                      autoComplete="off"
                      value={"seller"}
                    />{" "}
                    Seller
                  </label>
                </div>
              </div>
              <div className="form-group" style={{ height: 36 }}>
                <label htmlFor="formGroupExampleInput" />
                <input
                  type="text"
                  className="form-control"
                  id="formGroupExampleInput"
                  placeholder="Fullname"
                  name="fullname"
                  value={data.fullname}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group" style={{ height: 36 }}>
                <label htmlFor="formGroupExampleInput2" />
                <input
                  type="email"
                  className="form-control"
                  id="formGroupExampleInput2"
                  placeholder="Email"
                  name="email"
                  value={data.email}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="formGroupExampleInput2" />
                <input
                  type="text"
                  className="form-control"
                  id="formGroupExampleInput2"
                  placeholder="Password"
                  name="password"
                  value={data.password}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group" style={{ marginTop: 50 }}>
                <button
                  type="submit"
                  className="btn btn-danger btn-block rounded-pill"
                  id="button-addon2"
                  title="Register"
                  style={{ backgroundColor: "#DB3022" }}
                >
                  PRIMARY
                </button>
                <p className="text-regis">
                  Already have a Tokopedia account?
                  <Link to={"/login"} className="text-danger">
                    Login
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div> */}
      <div className="container metropolis">
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
            <form onSubmit={handleRegisterCustomer}>
              <div className="form-group">
                <input
                  name="customer_name"
                  type="name"
                  className="form-control"
                  placeholder="Username"
                  value={dataCustomer.customer_name}
                  onChange={handleChangeCustomer}
                />
              </div>
              <div className="form-group">
                <input
                  name="customer_email"
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  value={dataCustomer.customer_email}
                  onChange={handleChangeCustomer}
                />
              </div>
              <div className="form-group">
                <input
                  name="customer_pass"
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  value={dataCustomer.customer_pass}
                  onChange={handleChangeCustomer}
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
            <form onSubmit={handleRegisterSeller}>
              <div className="form-group">
                <input
                  name="seller_name"
                  type="text"
                  className="form-control"
                  placeholder="Username"
                  value={dataSeller.seller_name}
                  onChange={handleChangeSeller}
                />
              </div>
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
                  name="seller_phone"
                  type="text"
                  className="form-control"
                  placeholder="Phone number"
                  value={dataSeller.seller_phone}
                  onChange={handleChangeSeller}
                />
              </div>
              <div className="form-group">
                <input
                  name="seller_store"
                  type="text"
                  className="form-control"
                  placeholder="Store name"
                  value={dataSeller.seller_store}
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
          <div className="form-group row d-flex justify-content-center mt-1">
            <p className="text-regis">
              Already have an account ?
              <Link to="/login">
                <a href="/src/pages/Auth/Login.jsx" className="text-danger">
                  {" "}
                  Login{" "}
                </a>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;

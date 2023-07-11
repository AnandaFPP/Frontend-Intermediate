import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {

  let [customer, setCustomer] = useState({
    fullname: "",
    email: "",
    password: "",
    phone: ""
  })

  let [seller, setSeller] = useState({
    fullname: "",
    email: "",
    store: "",
    password: "",
    address:"",
    phone: ""
  })

  let onChangeCustomer = (e) => {
    setCustomer({
      ...customer,
      [e.target.name]: e.target.value
    })
    console.log(customer)
  }

  let onChangeSeller = (e) => {
    setSeller({
      ...seller,
      [e.target.name]: e.target.value
    })
    console.log(customer)
  }

  let onSubmitCustomer = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("fullname", customer.name);
    formData.append("email", customer.stock);
    formData.append("password", customer.price);
    formData.append("phone", customer.phone);
    axios
      .post("http://localhost:8000/users/register", customer)
      .then((res) => {
        console.log(res);
        alert("Register successful as customer!");
        window.location.reload();
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
      <div className="container">
        <img src={require("../../image/logo.png")} alt="Logo" />
        <p className="text-center py-3" style={{ fontWeight: "bold", color: "black" }}>
          Please sign up with your account
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
            <form onSubmit={onSubmitCustomer}>
              <div className="form-group">
                <input
                  name="fullname"
                  type="text"
                  className="form-control"
                  placeholder="Name"
                  onChangeCustomer={onChangeCustomer}
                />
              </div>
              <div className="form-group">
                <input
                  name="email"
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  onChangeCustomer={onChangeCustomer}
                />
              </div>
              <div className="form-group">
                <input
                  name="password"
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  onChangeCustomer={onChangeCustomer}
                />
              </div>
              <div className="form-group">
                <input
                  name="phone"
                  type="text"
                  className="form-control"
                  placeholder="Phone number"
                  onChangeCustomer={onChangeCustomer}
                />
              </div>
            </form>
          </div>
          {/* Seller */}
          <div
            className="tab-pane fade"
            id="pills-seller"
            role="tabpanel"
            aria-labelledby="pills-seller-tab"
          >
            <form>
              <div className="form-group">
                <input
                  name="fullname"
                  type="text"
                  className="form-control"
                  placeholder="Name"
                  onChangeSeller={onChangeSeller}
                />
              </div>
              <div className="form-group">
                <input
                  name="email"
                  type="text"
                  className="form-control"
                  placeholder="Email"
                  onChangeSeller={onChangeSeller}
                />
              </div>
              <div className="form-group">
                <input
                  name="store"
                  type="text"
                  className="form-control"
                  placeholder="Store name"
                  onChangeSeller={onChangeSeller}
                />
              </div>
              <div className="form-group">
                <input
                  name="password"
                  type="text"
                  className="form-control"
                  placeholder="Password"
                  onChangeSeller={onChangeSeller}
                />
              </div>
              <div className="form-group">
                <input
                  name="address"
                  type="text"
                  className="form-control"
                  placeholder="Address"
                  onChangeSeller={onChangeSeller}
                />
              </div>
              <div className="form-group">
                <input
                  name="phone"
                  type="text"
                  className="form-control"
                  placeholder="Phone number"
                  onChangeSeller={onChangeSeller}
                />
              </div>
            </form>
          </div>
          <div className="form-group">
            <button
              className="btn btn-danger btn-block rounded-pill"
              style={{ marginTop: 50 }}
            >
              <a href="../index.html"> Primary </a>
            </button>
            <p className="text-regis">
              Already have tokopedia account?
              <Link to="/login">
                <a href="" className="text-danger">
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

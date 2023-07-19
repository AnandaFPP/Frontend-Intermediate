import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import swal from "sweetalert";

const Login = () => {
  let [email, setEmail] = useState('');
  let [password, setPassword] = useState('');

  const navigate = useNavigate();

  let handleLogin = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/users/login", {email, password})
      .then((res) => {
        console.log(res);
        swal({
          title: "Login successful!",
          icon: "success",
          button: "Continue",
        });

        localStorage.setItem("token", res.data.data.token);
        navigate("/home");
        // window.location.reload();
      })
      .catch((err) => {
        alert(err);
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
              id="pills-home-tab"
              data-toggle="pill"
              data-target="#pills-home"
              type="button"
              role="tab"
              aria-controls="pills-home"
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
                  name=""
                  type="text"
                  className="form-control"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  name=""
                  type="text"
                  className="form-control"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button className="btn btn-danger btn-block rounded-pill">
                <a href="/src/pages/Home.jsx"> Primary </a>
              </button>
            </form>
          </div>
          {/* Seller */}
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

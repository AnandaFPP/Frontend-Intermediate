import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
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
            <form>
              <div className="form-group">
                <input
                  name=""
                  type="text"
                  className="form-control"
                  placeholder="Email"
                />
              </div>
              <div className="form-group">
                <input
                  name=""
                  type="text"
                  className="form-control"
                  placeholder="Password"
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
                  name=""
                  type="text"
                  className="form-control"
                  placeholder="Email"
                />
              </div>
              <div className="form-group">
                <input
                  name=""
                  type="text"
                  className="form-control"
                  placeholder="Password"
                />
              </div>
            </form>
          </div>
          <div className="form-group">
            <a href="#" className="float-right py-3 text-danger">
              Forgot password?
            </a>
            <button className="btn btn-danger btn-block rounded-pill">
              <a href="../index.html"> Primary </a>
            </button>
            <p className="text-regis">
              Don't have a Tokopedia account?
              <Link to='/register'>
                <a href="" className="text-danger">
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

import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {

  let [data, setData] = useState({
    fullname: "",
    email: "",
    password: "",
    role: ""
  })
  
  const navigate = useNavigate();

  let handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
  };


  let handleRegister = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/users/register", data)
      .then((res) => {
        console.log(res);
        alert("Register successful!");
        navigate("/login");
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
      <div className="container metropolis">
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
      </div>
    </>
  );
};

export default Register;

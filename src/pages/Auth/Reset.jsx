import React from "react";

const Reset = () => {
  return (
    <>
      <div className="container">
        <div className="">
          <img src="/src/image/logo.png" alt="Logo" className="mb-4" />
          <p className="text-center py-3 mb-4" style={{ fontWeight: 600 }}>
            Reset Password
          </p>
        </div>
        <form>
          <div className="form-group">
            <input
              name=""
              type="text"
              className="form-control"
              placeholder="Email"
            />
          </div>
        </form>
        <div className="form-group">
          <button className="btn btn-danger btn-block rounded-pill">
            <a href="../index.html"> Primary </a>
          </button>
          <p className="text-regis">
            Don't have a Tokopedia account?
            <a href="/pages/signup.html" className="text-danger">
              {" "}
              Register{" "}
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Reset;

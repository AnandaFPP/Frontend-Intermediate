import React from "react";

const Category = () => {
  return (
    <>
    <style>
      
    </style>
      <section className="mt-5">
        <div className="container">
          <h2 style={{ fontWeight: "bold" }}>Category</h2>
          <p className="">What are you currently looking for?</p>
          <div className="row">
            <div className="col-md-3 col-sm-6 col-12 mb-5">
              <div>
                <img
                  className="category"
                  src={require("../image/pants.png")}
                  alt="pants"
                />
              </div>
            </div>
            <div className="col-md-3 col-sm-6 col-12 mb-5">
              <div>
                <img
                  className="category"
                  src={require("../image/jacket.png")}
                  alt="jacket"
                />
              </div>
            </div>
            <div className="col-md-3 col-sm-6 col-12 mb-5">
              <div>
                <img
                  className="category"
                  src={require("../image/shorts.png")}
                  alt="shorts"
                />
              </div>
            </div>
            <div className="col-md-3 col-sm-6 col-12 mb-5">
              <div>
                <img
                  className="category"
                  src={require("../image/tshirt.png")}
                  alt="t-shirt"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Category;

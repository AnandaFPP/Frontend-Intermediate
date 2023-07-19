import React from "react";

const Items = () => {
  return (
    <>
      <div
        className="product row mt-3 ml-0"
        style={{
          boxShadow: "0px 0px 10px #29292940, 0px 0px 25px #fff",
          padding: "10px 0",
          borderRadius: 10,
        }}
      >
        <div className="col-md-5 ml-3">
          <div className="row">
            <img
              src={require("../../../assets/image/clothmybag.png")}
              alt="cloth"
              style={{ borderRadius: 10 }}
            />
            <div className="text1 ml-3">
              <h6>Men's formal suit - Black</h6>
              <p className="text">Zalora cloth</p>
            </div>
          </div>
        </div>
        <div className="col-md-3 mt-3">
          <div className="items row container">
            <img src={require("../../../assets/image/quantity.png")} alt="" />
          </div>
        </div>
        <div className="col-md-3 mt-4 ml-3">
          <p className="text-dark" style={{ fontWeight: 800 }}>
            Rp.250.000
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
        <div className="col-md-5 ml-3">
          <div className="row">
            <img
              src={require("../../../assets/image/kemal-alkan-_BDBEP0ePQc-unsplash 1.png")}
              alt="cloth"
              style={{ borderRadius: 10 }}
            />
            <div className="text1 ml-3">
              <h6>Men's Jacket Jeans</h6>
              <p className="text">Zalora cloth</p>
            </div>
          </div>
        </div>
        <div className="col-md-3 mt-3">
          <div className="items row container">
            <img src={require("../../../assets/image/quantity.png")} alt="" />
          </div>
        </div>
        <div className="col-md-3 mt-4 ml-3">
          <p className="text-dark" style={{ fontWeight: 800 }}>
            Rp.250.000
          </p>
        </div>
      </div>
    </>
  );
};

export default Items;

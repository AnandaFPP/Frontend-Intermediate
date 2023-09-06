import React from "react";
import NavbarLogin from "../components/NavbarLogin";
import BagList from "../components/BagList";
import BagTotal from "../components/BagTotal";

const Order = () => {
  return (
    <>
      <NavbarLogin />
      <div className="container mt-5">
        <h3 style={{ fontWeight: 600 }}>My bag</h3>
        <div className="row">
          <BagList />
          <BagTotal />
        </div>
      </div>
    </>
  );
};

export default Order;

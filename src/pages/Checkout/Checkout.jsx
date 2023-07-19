import React from "react";
import NavbarLogin from "../../components/NavbarLogin";
import Items from "./Items/Items";
import Summary from "./Summary/Summary";
import Address from "./Address/Address";

const Checkout = () => {
  return (
    <>
      <NavbarLogin />
      <div className="container mt-5">
        <h2 style={{ fontWeight: 700, fontSize: 34 }}>Checkout</h2>
        <h6 className="mt-4" style={{ fontWeight: "bold" }}>
          Shipping Address
        </h6>
        <div className="row">
          <div className="col-md-8">
            <Address/>
            <Items />
          </div>
            <Summary/>
        </div>
      </div>
    </>
  );
};

export default Checkout;

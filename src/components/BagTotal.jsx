import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const BagTotal = () => {
  let [order, setOrder] = useState([]);

  useEffect(() => {
    const getCustomerId = localStorage.getItem("customer_id");
    axios
      .get(`${process.env.REACT_APP_API_URL}/order/${getCustomerId}`)
      .then((response) => setOrder(response.data.data))
      .catch((error) => console.log(error));
  }, []);

  const calculateTotal = () => {
    let totalOrderCart = 0;
    order.map((item) => (totalOrderCart += item.total_order));
    return totalOrderCart;
  };

  const formatRp = (bilangan) => {
    var reverse = bilangan.toString().split("").reverse().join(""),
      ribuan = reverse.match(/\d{1,3}/g);
    ribuan = ribuan.join(".").split("").reverse().join("");
    return ribuan;
  };

  const handleBuyClick = () => {
    if (order.length === 0) {
      Swal.fire({
        title: "Your bag is empty!",
        text: "Please add items to your bag before proceeding to checkout.",
        icon: "warning",
      });
    } else {
      window.location.href = "/checkout";
    }
  };

  return (
    <>
      <div className="container col-md-4 col-sm-6 mb-5 mt-3">
        <div
          className="container product"
          style={{
            boxShadow: "0px 0px 10px #29292940, 0px 0px 25px #fff",
            padding: 20,
            borderRadius: 5,
          }}
        >
          <h4 style={{ fontWeight: 600 }}>Shopping summary</h4>
          <div className="row mt-4 prices">
            <p className="col-md-6 col-sm-1" style={{ color: "#8e8e93" }}>
              Total price
            </p>
            <p
              className="col-md-6 col-sm-2 text-dark"
              style={{ fontWeight: 800 }}
            >
              Rp. {formatRp(calculateTotal())}
            </p>
          </div>
          <button
            className="btn btn-danger btn-lg btn-block"
            type="button"
            onClick={handleBuyClick}
          >
            Buy
          </button>
        </div>
      </div>
    </>
  );
};

export default BagTotal;

import React, { useEffect, useState } from "react";
import axios from "axios";

const Summary = () => {
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

  let Delivery = 50000;

  return (
    <>
      <div className="container col-md-4 col-sm-6 mb-5 mt-3">
        <div
          className="container product"
          style={{
            boxShadow: "0px 0px 10px #29292940, 0px 0px 25px #fff",
            padding: 10,
            borderRadius: 5,
          }}
        >
          <h4 style={{ fontWeight: 600 }}>Shopping summary</h4>
          <div className="row mt-4 prices">
            <p className="col-md-7 col-sm-1" style={{ color: "#9b9b9b" }}>
              Order
            </p>
            <p
              className="col-md-5 col-sm-2 text-dark"
              style={{ fontWeight: 800 }}
            >
              Rp. {formatRp(calculateTotal())}
            </p>
            <p className="col-md-7 col-sm-1" style={{ color: "#9b9b9b" }}>
              Delivery
            </p>
            <p
              className="col-md-5 col-sm-2 text-dark"
              style={{ fontWeight: 800 }}
            >
              Rp. {formatRp(Delivery)}
            </p>
            <p
              className="col-md-7 col-sm-1"
              style={{ color: "black", fontWeight: "bold" }}
            >
              Shopping Summary
            </p>
            <p
              className="col-md-5 col-sm-2 text-danger"
              style={{ fontWeight: "bold" }}
            >
              Rp. {formatRp(Delivery + calculateTotal())}
            </p>
          </div>
          <button
            className="btn btn-danger btn-lg btn-block"
            style={{ borderRadius: 25 }}
            data-toggle="modal"
            data-target="#paymentModal"
          >
            Select payment
          </button>
          {/* Payment Modal */}
          <div
            className="modal fade"
            id="paymentModal"
            tabIndex={-1}
            aria-labelledby="paymentModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
              <div className="modal-content">
                <div className="modal-header" id="payment">
                  <h5
                    className="modal-title"
                    id="exampleModalLabel"
                    style={{ fontWeight: 600 }}
                  >
                    Payment
                  </h5>
                  <button
                    type="button"
                    className="close order-1"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div className="modal-body border-bottom">
                  <div className="payment-method">
                    <div className="row ml-1">
                      <h6 style={{ fontWeight: 600 }}>Payment Method</h6>
                      <div
                        className="row col-12 d-flex"
                        style={{ padding: "10px 0" }}
                      >
                        <div className="col-3">
                          <img
                            src={require("../../../assets/image/gopay.png")}
                            alt="gopay"
                          />
                        </div>
                        <div className="col-8 p-1 pl-3">
                          <h6 style={{ marginLeft: 10, fontWeight: 600 }}>
                            Go-pay
                          </h6>
                        </div>
                        <div className="col-1 pl-3 p-1 w-100">
                          <input
                            type="checkbox"
                            className="checkbox"
                            name="checkbox"
                          />
                        </div>
                      </div>
                      <div
                        className="row col-12 d-flex"
                        style={{ padding: "10px 0" }}
                      >
                        <div className="col-3">
                          <img
                            src={require("../../../assets/image/pos-indonesia.png")}
                            alt="pos-indonesia"
                          />
                        </div>
                        <div className="col-8 p-1 pl-3">
                          <h6 style={{ marginLeft: 10, fontWeight: 600 }}>
                            Pos Indonesia
                          </h6>
                        </div>
                        <div className="col-1 pl-3 p-1 w-100">
                          <input
                            type="checkbox"
                            className="checkbox"
                            name="checkbox"
                          />
                        </div>
                      </div>
                      <div
                        className="row col-12 d-flex"
                        style={{ padding: "10px 0" }}
                      >
                        <div className="col-3">
                          <img
                            src={require("../../../assets/image/mastercard.png")}
                            alt="mastercard"
                          />
                        </div>
                        <div className="col-8 p-1 pl-3">
                          <h6 style={{ marginLeft: 10, fontWeight: 600 }}>
                            Mastercard
                          </h6>
                        </div>
                        <div className="col-1 pl-3 p-1 w-100">
                          <input
                            type="checkbox"
                            className="checkbox"
                            name="checkbox"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="modal-body border" style={{ paddingTop: 10 }}>
                  <h5
                    className="col-md-12 col-8 mt-3"
                    style={{ fontWeight: 600, marginLeft: "-15px" }}
                  >
                    Shopping summary
                  </h5>
                  <div className="pt-3">
                    <div className="d-flex justify-content-between">
                      <p style={{ color: "#9B9B9B" }}>Order</p>
                      <h5 style={{ fontWeight: 600 }}>Rp 500.000</h5>
                    </div>
                    <div className="d-flex justify-content-between">
                      <p style={{ color: "#9B9B9B" }}>Delivery</p>
                      <h5 style={{ fontWeight: 600 }}>Rp 45.000</h5>
                    </div>
                  </div>
                </div>
                <div className="modal-footer d-flex justify-content-between">
                  <div className="">
                    <h5 style={{ fontWeight: 600 }}>Shopping summary</h5>
                    <h5
                      className="text-danger"
                      style={{ fontWeight: 600, fontSize: 18 }}
                    >
                      Rp. 545.000
                    </h5>
                  </div>
                  <div>
                    <button
                      type="button"
                      className="buy-button btn btn-danger rounded-pill"
                      style={{}}
                    >
                      Buy
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End Payment Modal */}
        </div>
      </div>
    </>
  );
};

export default Summary;

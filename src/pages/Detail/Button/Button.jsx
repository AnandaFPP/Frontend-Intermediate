import axios from "axios";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";

const Button = () => {
  const { id } = useParams();
  const getUserId = localStorage.getItem("customer_id");
  const getToken = localStorage.getItem("user_token");
  const [data, setData] = useState({
    product_id: id,
    order_quantity: "",
    customer_id: getUserId,
  });

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });
  const handleCreateOrder = (e) => {
    e.preventDefault();
    axios.post(`${process.env.REACT_APP_API_URL}/order`, data)
    .then((res) => {
      if (res.data.statusCode === 201) {
        Toast.fire({
          title: "Order Created",
          icon: "success",
        });
      } else {
        Toast.fire({
          title: "Order Created Error",
          icon: "error",
        });
      }
    });
  };

  return (
    <>
      <form
        onSubmit={
          !getToken
            ? Toast.fire({
                title: "You need to log in to use this feature.",
                icon: "warning",
              })
            : handleCreateOrder
        }
      >
        <div className="metropolis d-flex flex-row">
          {/* Size */}
          <div style={{ marginRight: 40 }}>
            <p
              style={{
                fontWeight: "bold",
                color: "black",
                marginTop: 20,
              }}
            >
              Size
            </p>
            <div className="color-groups row">
              <div
                className="color color-white text-center"
                style={{
                    fontSize: 20,
                    width: "36px",
                    height: "36px",
                    borderRadius: "50%",
                    backgroundColor: "#D4D4D4",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
              >
                -
              </div>
              <input
                className="color color text-center"
                style={{
                    borderColor: "transparent",
                    width: "70px",
                  }}
                placeholder="XL"
              />
              <div
                className="color color-white text-center"
                style={{
                    fontSize: 20,
                    width: "36px",
                    height: "36px",
                    borderRadius: "50%",
                    backgroundColor: "white",
                    boxShadow: "0px 0px 4px rgba(142, 142, 142, 0.25)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "black",
                  }}
              >
                +
              </div>
            </div>
          </div>

          {/* Quantity */}
          <div >
            <p
              style={{
                fontWeight: "bold",
                color: "black",
                marginTop: 20,
              }}
            >
              Quantity
            </p>
            <div className="color-groups row">
              <div
                className="color color-white text-center"
                style={{
                    fontSize: 20,
                    width: "36px",
                    height: "36px",
                    borderRadius: "50%",
                    backgroundColor: "#D4D4D4",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  onClick={() => {
                    setData({
                      ...data,
                      order_quantity: Math.max(1, data.order_quantity - 1),
                    });
                  }}
              >
                -
              </div>

              <input
              type="text"
                className="color color text-center"
                style={{
                    borderColor: "transparent",
                    width: "70px",
                  }}
                placeholder="1"
                name="order_quantity"
                value={data.order_quantity}
                onChange={handleChange}
              />

              <div
                className="color color-white text-center"
                style={{
                    fontSize: 20,
                    width: "36px",
                    height: "36px",
                    borderRadius: "50%",
                    backgroundColor: "white",
                    boxShadow: "0px 0px 4px rgba(142, 142, 142, 0.25)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "black",
                  }}
                  onClick={() => {
                    setData({
                      ...data,
                      order_quantity: data.order_quantity + 1,
                    });
                  }}
              >
                +
              </div>
            </div>
          </div>
        </div>
        <div className="buttons d-flex mt-3 metropolis">
          <button
            type="button"
            className="Btn rounded-pill mr-2"
            style={{ width: 160, height: 48 }}
          >
            Chat
          </button>
          <button
            type="submit"
            className="Btn rounded-pill mr-2"
            style={{ width: 160, height: 48 }}
          >
            Add Bag
          </button>
          <button
            type="button"
            className="btn btn-danger rounded-pill mr-2"
            style={{ width: 343, height: 48, backgroundColor: "#DB3022" }}
          >
            Buy Now
          </button>
        </div>
      </form>
    </>
  );
};

export default Button;
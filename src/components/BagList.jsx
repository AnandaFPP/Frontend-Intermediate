import axios from "axios";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

const BagList = () => {
  let [order, setOrder] = useState([]);
  const getUserId = localStorage.getItem("customer_id");

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/order/${getUserId}`)
      .then((response) => setOrder(response.data.data))
      .catch((error) => console.log(error));
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const selectItems = order.length;

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

  const formatRp = (bilangan) => {
    var reverse = bilangan.toString().split("").reverse().join(""),
      ribuan = reverse.match(/\d{1,3}/g);
    ribuan = ribuan.join(".").split("").reverse().join("");
    return ribuan;
  };

  const handleDeleteOrder = (e) => {
    e.preventDefault();
    axios
      .delete(`${process.env.REACT_APP_API_URL}/order/${getUserId}`)
      .then((res) => {
        console.log("Delete Response:", res.data);
        Toast.fire({
          title: "Delete order success!",
          icon: "success",
        });
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <div className="col-md-8 justify-content-center">
        <div
          className="product row mt-3 ml-0 col-12"
          style={{
            boxShadow: "0px 0px 10px #29292940, 0px 0px 25px #fff",
            borderRadius: 10,
            padding: "10px 0",
          }}
        >
          <div className="col-md-1 col-2 d-flex">
            <input
              type="checkbox"
              className="checkbox"
              name="checkbox"
              id="cb"
            />
          </div>
          <div className="col-md-9 col-7 pt-3">
            <p
              className="teks card-title"
              style={{ fontWeight: 600, color: "black" }}
            >
              Select all items{" "}
              <span className="text-secondary">
                {" "}
                ({selectItems} items selected)
              </span>
            </p>
          </div>
          <div className="col-md-2 col-3 pt-3">
            <form onSubmit={handleDeleteOrder}>
              <button
                type="submit"
                style={{
                  textAlign: "center",
                  color: "#db3022",
                  border: 0,
                  backgroundColor: "transparent",
                }}
              >
                Delete
              </button>
            </form>
          </div>
        </div>
        {order.map((item, index) => (
          <div
            className="product row mt-3 ml-0 col-12"
            style={{
              boxShadow: "0px 0px 10px #29292940, 0px 0px 25px #fff",
              padding: "10px 0",
              borderRadius: 10,
            }}
          >
            <div className="col-md-1 col-2 d-flex">
              <input
                type="checkbox"
                className="checkbox"
                name="checkbox"
                id="cb"
              />
            </div>
            <div className="col-md-5 col-10">
              <div className="row">
                <img
                  src={item.product_image}
                  alt="cloth"
                  style={{
                    float: "left",
                    borderRadius: 8,
                    width: 69,
                    height: 59,
                    objectFit: "cover",
                    margin: "10px 0px",
                  }}
                  crossOrigin="anonymous"
                />
                <div className="text1 ml-3">
                  <h6 style={{ fontWeight: 600 }}>{item.product_name}</h6>
                  <p style={{ fontSize: "small" }}>
                    Rp. {formatRp(item.total_order)}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="color-groups mt-3 ml-3 row justify-content-around">
                <div
                  className="color color-white text-center"
                  style={{
                    fontSize: 25,
                    width: "36px",
                    height: "36px",
                    borderRadius: "50%",
                    backgroundColor: "#D4D4D4",
                    boxShadow: "0px 0px 4px rgba(142, 142, 142, 0.25)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "black",
                  }}
                >
                  -
                </div>
                <div
                  className="color color text-center pt-1"
                  style={{ fontSize: 16 }}
                >
                  {item.order_quantity}
                </div>
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
            <div className="col-md-3 pt-3 col-6">
              <p className="text-dark" style={{ fontWeight: 800 }}>
                Rp. {formatRp(item.total_order)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default BagList;

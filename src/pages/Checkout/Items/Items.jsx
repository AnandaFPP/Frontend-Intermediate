import axios from "axios";
import React, { useEffect, useState } from "react";

const Items = () => {
  let [order, setOrder] = useState([]);
  useEffect(() => {
    const getUserId = localStorage.getItem("customer_id");
    axios
      .get(`${process.env.REACT_APP_API_URL}/order/${getUserId}`)
      .then((response) => setOrder(response.data.data))
      .catch((error) => console.log(error));
  }, []);

  const formatRp = (bilangan) => {
    var reverse = bilangan.toString().split("").reverse().join(""),
      ribuan = reverse.match(/\d{1,3}/g);
    ribuan = ribuan.join(".").split("").reverse().join("");
    return ribuan;
  };
  return (
    <>
      {order.map((item, index) => (
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
              alt="product"
              src={item.product_image}
              crossOrigin="anonymous"
              style={{
                float: "left",
                borderRadius: 8,
                width: 69,
                height: 59,
                objectFit: "cover",
                margin: "10px 0px",
              }}
              className="mr-2"
            />
              <div className="text1 ml-3">
                <h6>{item.product_name}</h6>
                <p className="text">{item.product_name}</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 mt-3">
          <div className="color-groups ml-3 row justify-content-around">
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
          <div className="col-md-3 mt-4 ml-3">
            <p className="text-dark" style={{ fontWeight: 800 }}>
            Rp. {formatRp(item.total_order)}
            </p>
          </div>
        </div>
      ))}
    </>
  );
};

export default Items;

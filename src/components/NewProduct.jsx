import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const NewProduct = () => {
  let [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/products")
      .then((res) =>
      setProducts(res.data.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <section>
      <div className="container mt-5">
        <h2 style={{ fontWeight: "bold" }}>New</h2>
        <p className="">You've never seen before!</p>
        <div className="row">
          {products.map((product) => (
            <div className="col-md-3 col-sm-6 mb-5">
              <Link to={`/product/${product.id}`}>
                <div className="border product">
                  <img
                    className="w-100"
                    src={product.photo}
                    crossOrigin="anonymous"
                    alt="cloth"
                  />
                  <div className="p-2 border-top">
                    <h5 className="card-title">{product.name}</h5>
                    <h5 className="text-danger">Rp.{product.price}</h5>
                    <img
                      src={require("../assets/image/rating.png")}
                      alt="rating"
                    />
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewProduct;

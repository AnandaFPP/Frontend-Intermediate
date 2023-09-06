import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const NewProduct = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/products`)
      .then((res) => setProducts(res.data.data))
      .catch((err) => console.log(err));
  }, []);

  const formatRp = (bilangan) => {
    var reverse = bilangan.toString().split("").reverse().join(""),
      ribuan = reverse.match(/\d{1,3}/g);
    ribuan = ribuan.join(".").split("").reverse().join("");
    return ribuan;
  };

  const cardStyle = {
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "10px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.2s",
    cursor: "pointer",
    backgroundColor: "#fff",
    textAlign: "center",
    minHeight: "300px",
  };

  const imageStyle = {
    maxWidth: "100%",
    maxHeight: "200px",
    objectFit: "cover",
    borderRadius: "8px",
  };

  const titleStyle = {
    fontSize: "1.2rem",
    fontWeight: "bold",
    margin: "10px 0",
  };

  const priceStyle = {
    fontSize: "1.1rem",
    color: "#ff6347",
    marginBottom: "10px",
  };

  return (
    <section>
      <div className="container mt-5">
        <h2 style={{ fontWeight: "bold" }}>New</h2>
        <p className="">You've never seen before!</p>
        <div className="row">
          {products.map((product) => (
            <div className="col-md-3 col-sm-6 mb-5" key={product.product_id}>
              <Link to={`/product/${product.product_id}`}>
                <div className="product" style={cardStyle}>
                  <img
                    style={imageStyle}
                    src={product.product_image}
                    crossOrigin="anonymous"
                    alt="cloth"
                  />
                  <div className="p-2">
                    <h5 className="card-title" style={titleStyle}>
                      {product.product_name}
                    </h5>
                    <h5 className="text-danger" style={priceStyle}>
                      Rp. {formatRp(product.product_price)}
                    </h5>
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

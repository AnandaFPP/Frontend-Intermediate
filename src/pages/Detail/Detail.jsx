import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavbarLogin from "../../components/NavbarLogin";
import Navbar from "../../components/Navbar";
import Button from "./Button/Button";

const Detail = () => {
  let { id } = useParams();
  let [product, setProduct] = useState([]);
  const isUserLoggedIn = !!localStorage.getItem("user_token");

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/products/${id}`)
      .then((res) => {
        console.log(res.data);
        setProduct(res.data.data[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  const formatPrice = (price) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(price);
  };
  return (
    <>
      {isUserLoggedIn ? <NavbarLogin /> : <Navbar />}
      <>
        <section className="container mt-5">
          <p>Home &gt; category &gt; t-shirt</p>
          <div className="row">
            <div className="col-md-4 col-sm-6 col-12 mt-3">
              <img
                className="img-fluid w-100 pb-2"
                src={product.product_image}
                alt="product1"
                crossOrigin="anonymous"
                style={{ borderRadius: 15 }}
              />
            </div>
            <div className="col-md-8 mt-3">
              <h2 style={{ fontWeight: "bold" }}>{product.product_name}</h2>
              <p>Stock : {product.product_stock}</p>
              <img
                src={require("../../assets/image/rating.png")}
                alt="rating"
                className="mb-3"
              />
              <h5>Price</h5>
              <p className="price mt-1">{formatPrice(product.product_price)}</p>
              <h5>Color</h5>
              <div className="container row">
                <img
                  src={require("../../assets/image/Ellipse 5.png")}
                  alt=""
                  style={{ margin: "5px" }}
                />
                <img
                  src={require("../../assets/image/Ellipse 6.png")}
                  alt=""
                  style={{ margin: "5px" }}
                />
                <img
                  src={require("../../assets/image/Ellipse 7.png")}
                  alt=""
                  style={{ margin: "5px" }}
                />
                <img
                  src={require("../../assets/image/Ellipse 8.png")}
                  alt=""
                  style={{ margin: "5px" }}
                />
              </div>
              <div className=" mt-3">
                <Button />
              </div>
            </div>
          </div>
        </section>
        <section className="mt-3">
          <div className="container">
            <h3>Informasi Produk</h3>
            <div className="text mt-5">
              <h4>Condition</h4>
              <h5 className="text-danger font-weight-bold">New</h5>
            </div>
            <div className="desc mt-5 text-justify">
              <h4>Description</h4>
              <p>{product.product_description}</p>
            </div>
            <h3 className="">Product review</h3>
            <div className="container row rating-star">
              <div className="col-md-2 col-sm-1">
                <div className="row">
                  <p
                    className="rating font-weight-bold"
                    style={{ fontSize: 50, color: "black" }}
                  >
                    5.0
                    <span
                      className="rating text-secondary"
                      style={{ fontSize: 20 }}
                    >
                      /5
                    </span>
                  </p>
                </div>
                <div className="img-rating">
                  <img
                    src={require("../../assets/image/rating.png")}
                    alt="rating"
                  />
                </div>
              </div>
              <div className="row col-3 rows">
                <div className="star col-1">
                  <img src={require("../../assets/image/Star.png")} alt="" />
                  <img src={require("../../assets/image/Star.png")} alt="" />
                  <img src={require("../../assets/image/Star.png")} alt="" />
                  <img src={require("../../assets/image/Star.png")} alt="" />
                  <img src={require("../../assets/image/Star.png")} alt="" />
                </div>
                <div className="row ml-1 col-1">
                  <span>5</span>
                  <span>4</span>
                  <span>3</span>
                  <span>2</span>
                  <span>1</span>
                </div>
                <div
                  style={{
                    height: 8,
                    width: 120,
                    borderRadius: 20,
                    backgroundColor: "#8e8e93",
                    marginTop: "9px",
                    marginLeft: "25px",
                  }}
                />
                <div className="row ml-0 col-1">
                  <span>4</span>
                  <span>0</span>
                  <span>0</span>
                  <span>0</span>
                  <span>0</span>
                </div>
              </div>
            </div>
            <hr />
            <section>
              <div className="container mt-4">
                <h2 style={{ fontWeight: "bold" }}>You can also like this</h2>
                <p className="">You've never seen before!</p>
                <div className="row">
                  <div className="col-md-3 col-sm-6 mb-5">
                    <div className="product" style={{ padding: 0 }}>
                      <img
                        className="w-100"
                        src={require("../../assets/image/clothes.png")}
                        alt="cloth"
                        style={{ marginLeft: 0, marginTop: "-1px" }}
                      />
                      <div className="p-2">
                        <h5 className="card-title">
                          Men's formal suit - Black &amp; White
                        </h5>
                        <h5 className="text-danger">Rp.250.000</h5>
                        <img
                          src={require("../../assets/image/rating.png")}
                          alt="rating"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6 mb-5">
                    <div className="border rounded product">
                      <img
                        className="w-100"
                        src={require("../../assets/image/clothes.png")}
                        alt="cloth"
                        style={{ marginLeft: 0, marginTop: "-1px" }}
                      />
                      <div className="p-2">
                        <h5 className="card-title">
                          Men's formal suit - Black &amp; White
                        </h5>
                        <h5 className="text-danger">Rp.250.000</h5>
                        <img
                          src={require("../../assets/image/rating.png")}
                          alt="rating"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6 mb-5">
                    <div className="border rounded product">
                      <img
                        className="w-100"
                        src={require("../../assets/image/clothes.png")}
                        alt="cloth"
                        style={{ marginLeft: 0, marginTop: "-1px" }}
                      />
                      <div className="p-2">
                        <h5 className="card-title">
                          Men's formal suit - Black &amp; White
                        </h5>
                        <h5 className="text-danger">Rp.250.000</h5>
                        <img
                          src={require("../../assets/image/rating.png")}
                          alt="rating"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6 mb-5">
                    <div className="border rounded product">
                      <img
                        className="w-100"
                        src={require("../../assets/image/clothes.png")}
                        alt="cloth"
                        style={{ marginLeft: 0, marginTop: "-1px" }}
                      />
                      <div className="p-2">
                        <h5 className="card-title">
                          Men's formal suit - Black &amp; White
                        </h5>
                        <h5 className="text-danger">Rp.250.000</h5>
                        <img
                          src={require("../../assets/image/rating.png")}
                          alt="stars"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6 mb-5">
                    <div className="border rounded product">
                      <img
                        className="w-100"
                        src={require("../../assets/image/clothes.png")}
                        alt="cloth"
                        style={{ marginLeft: 0, marginTop: "-1px" }}
                      />
                      <div className="p-2">
                        <h5 className="card-title">
                          Men's formal suit - Black &amp; White
                        </h5>
                        <h5 className="text-danger">Rp.250.000</h5>
                        <img
                          src={require("../../assets/image/rating.png")}
                          alt="stars"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6 mb-5">
                    <div className="border rounded product">
                      <img
                        className="w-100"
                        src={require("../../assets/image/clothes.png")}
                        alt="cloth"
                        style={{ marginLeft: 0, marginTop: "-1px" }}
                      />
                      <div className="p-2">
                        <h5 className="card-title">
                          Men's formal suit - Black &amp; White
                        </h5>
                        <h5 className="text-danger">Rp.250.000</h5>
                        <img
                          src={require("../../assets/image/rating.png")}
                          alt="stars"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6 mb-5">
                    <div className="border rounded product">
                      <img
                        className="w-100"
                        src={require("../../assets/image/clothes.png")}
                        alt="cloth"
                        style={{ marginLeft: 0, marginTop: "-1px" }}
                      />
                      <div className="p-2">
                        <h5 className="card-title">
                          Men's formal suit - Black &amp; White
                        </h5>
                        <h5 className="text-danger">Rp.250.000</h5>
                        <img
                          src={require("../../assets/image/rating.png")}
                          alt="stars"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6 mb-5">
                    <div className="border rounded product">
                      <img
                        className="w-100"
                        src={require("../../assets/image/clothes.png")}
                        alt="cloth"
                        style={{ marginLeft: 0, marginTop: "-1px" }}
                      />
                      <div className="p-2">
                        <h5 className="card-title">
                          Men's formal suit - Black &amp; White
                        </h5>
                        <h5 className="text-danger">Rp.250.000</h5>
                        <img
                          src={require("../../assets/image/rating.png")}
                          alt="stars"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </section>
      </>
    </>
  );
};

export default Detail;

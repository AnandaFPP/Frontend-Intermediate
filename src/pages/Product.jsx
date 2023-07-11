import axios from "axios";
import React, { useEffect, useState } from "react";
import ModalCreate from "../components/ModalCreate";
import ModalUpdate from "../components/ModalUpdate";
import ModalDelete from "../components/ModalDelete";
import { Link } from "react-router-dom";
import NavbarLogin from "../components/NavbarLogin";

const Product = () => {
  let [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/products")
      .then((res) => setProducts(res.data.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <NavbarLogin/>
      <div className="m-4">
        <ModalCreate />
        <table className="table table-striped table-dark mt-3">
          <thead>
            <tr className="text-center">
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Stock</th>
              <th scope="col">Price</th>
              <th scope="col">Photo</th>
              <th scope="col">Description</th>
              <th scope="col">Action</th>
              {/* <th scope="col">Image</th>
              <th scope="col">Description</th> */}
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr>
                <th>{product.id}</th>
                <td>{product.name}</td>
                <td>{product.stock}</td>
                <td>Rp.{product.price}</td>
                <img
                  src={product.photo}
                  alt="product1"
                  crossOrigin="anonymous"
                  style={{ width: 100, margin: "4px" }}
                />
                <td>{product.description}</td>
                <td className="col-3 d-flex align-items-center">
                  <Link to={`${product.id}`}>
                    <button className="btn btn-success">Detail</button>
                  </Link>
                  <ModalUpdate
                    id={product.id}
                    name={product.name}
                    stock={product.stock}
                    price={product.price}
                    description={product.description}
                  >
                    Update
                  </ModalUpdate>
                  <ModalDelete id={product.id}>Delete</ModalDelete>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Product;

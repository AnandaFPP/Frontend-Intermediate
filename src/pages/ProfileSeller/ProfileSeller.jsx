import React, { useEffect, useState } from "react";
import NavbarLogin from "../../components/NavbarLogin";
import ModalUpdate from "../../components/ModalUpdate/ModalUpdate";
import ModalDelete from "../../components/ModalDelete/ModalDelete";
import SidebarSeller from "../../components/SidebarSeller/SidebarSeller";
import { useDispatch, useSelector } from "react-redux";
import getProductAction from "../../config/redux/action/Product/getProductAction";
import createProductAction from "../../config/redux/action/Product/createProductAction";
import Pagination from "../../components/Pagination/Pagination";
import axios from "axios";
import Swal from "sweetalert2";
import GetCategoryActions from "../../config/redux/action/Category/getCategoryAction";

const ProfileSeller = () => {
  const getSeller = localStorage.getItem("seller_id");

  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });

  const dispatch = useDispatch();

  const { product } = useSelector((state) => state.product);

  const [search, setSearch] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(4);

  useEffect(() => {
    dispatch(getProductAction());
  }, []);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = product.slice(firstPostIndex, lastPostIndex);

  let [data, setData] = useState({
    product_name: "",
    product_stock: "",
    product_price: "",
    product_description: "",
    category_id: "",
  });

  const [dataSeller, setDataSeller] = useState({
    seller_store: "",
    seller_email: "",
    seller_phone: "",
    seller_description: "",
  });

  const { category } = useSelector((state) => state.category);

  let [photo, setPhoto] = useState(null);

  let handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
    console.log(data);
  };

  const handleChangeSeller = (e) => {
    setDataSeller({
      ...dataSeller,
      [e.target.name]: e.target.value,
    });
  };

  let handleUpload = (e) => {
    setPhoto(e.target.files[0]);
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createProductAction(data, photo));
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    await axios
      .put(`${process.env.REACT_APP_API_URL}/seller/profile/${getSeller}`, dataSeller)
      .then((response) => {
        Toast.fire({
          title: "Update store successfully!.",
          icon: "success",
        });
        setDataSeller(response);
        window.location.reload();
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    const getSeller = localStorage.getItem("seller_id");
    axios
      .get(`${process.env.REACT_APP_API_URL}/seller/profile/${getSeller}`)
      .then((response) => setDataSeller(response.data.data[0]))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    dispatch(GetCategoryActions());
  }, []);

  return (
    <>
      <NavbarLogin />
      <section>
        <div
          className="row m-0 metropolis"
          id="profile-main"
          style={{ height: "91vh" }}
        >
          {/* Left side seller profile */}
          <SidebarSeller />
          {/* Right side seller profile */}
          <div
            className="col-md-9 col-12 pt-5"
            style={{ backgroundColor: "#F5F5F5" }}
          >
            <div className="tab-content" id="nav-tabContent">
              <div
                className="tab-pane fade show active"
                id="list-home"
                role="tabpanel"
                aria-labelledby="list-home-list"
              >
                <div className="container ml-md-3">
                  <div className="card pl-3 col-sm-10">
                    <div className="card-body">
                      <div className="pt-3 border-bottom">
                        <h3 style={{ fontWeight: 600 }}>My profile store</h3>
                        <p className="text-secondary">
                          Manage your profile information
                        </p>
                      </div>
                      <form onSubmit={handleUpdate}>
                        <div className="row pt-5">
                          <div className="col-md-8 col-12 ml-1 border-right">
                            <div className="form-group row">
                              <label
                                htmlFor="inputName"
                                className="col-sm-3 col-form-label text-secondary"
                              >
                                Store Name
                              </label>
                              <div className="col-sm-9">
                                <input
                                  type="text"
                                  className="form-control"
                                  id="inputName"
                                  placeholder=""
                                  name="seller_store"
                                  value={dataSeller.seller_store}
                                  onChange={handleChangeSeller}
                                />
                              </div>
                            </div>
                            <div className="form-group row mt-4">
                              <label
                                htmlFor="inputEmail"
                                className="col-sm-3 col-form-label text-secondary"
                              >
                                Email
                              </label>
                              <div className="col-sm-9">
                                <input
                                  type="email"
                                  className="form-control"
                                  id="inputEmail"
                                  placeholder=""
                                  name="seller_email"
                                  value={dataSeller.seller_email}
                                  onChange={handleChangeSeller}
                                />
                              </div>
                            </div>
                            <div className="form-group row mt-4">
                              <label
                                htmlFor="inputPhone"
                                className="col-sm-3 col-form-label text-secondary"
                              >
                                Phone number
                              </label>
                              <div className="col-sm-9">
                                <input
                                  type="text"
                                  className="form-control"
                                  id="inputPhone"
                                  placeholder=""
                                  name="seller_phone"
                                  value={dataSeller.seller_phone}
                                  onChange={handleChangeSeller}
                                />
                              </div>
                            </div>
                            <div className="form-group row mt-4">
                              <label
                                htmlFor="inputPhone"
                                className="col-sm-4 col-form-label text-secondary"
                              >
                                Store description
                              </label>
                              <div className="col-sm-8">
                                <input
                                  type="text"
                                  className="form-control"
                                  id="inputPhone"
                                  placeholder=""
                                  name="seller_description"
                                  value={dataSeller.seller_description}
                                  onChange={handleChangeSeller}
                                />
                              </div>
                            </div>
                          </div>
                          <div id="border-profile" className="col-md-3 ml-3">
                            <img
                              className="pl-5 mb-3 d-flex justify-content-center"
                              src={require("../../assets/image/Large-photo-profile.png")}
                              alt="seller-img"
                            />
                            <button
                              type="button"
                              className="btn btn-outline-secondary rounded-pill ml-5"
                              style={{ width: "fit-content" }}
                            >
                              Select image
                            </button>
                          </div>
                          <div className="col-sm-2" />
                          <div className="col-sm-2 mt-3">
                            <button
                              type="submit"
                              className="btn btn-danger rounded-pill w-100"
                              style={{ width: "fit-content" }}
                            >
                              Save
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="list-products"
                role="tabpanel"
                aria-labelledby="list-products-list"
              >
                <div className="card md-ml-0 col-sm-10">
                  <div className="card-body">
                    <div className="pt-3">
                      <h3 style={{ fontWeight: 600 }}>My Product</h3>
                    </div>
                    <div className="row pt-3">
                      <ul
                        className="nav nav-pills pt-3 mb-3"
                        id="pills-tab"
                        role="tablist"
                      >
                        <li className="nav-item" role="presentation">
                          <button
                            className="nav-link btn btn-outline-danger active"
                            id="pills-products-tab"
                            data-toggle="pill"
                            data-target="#pills-products"
                            type="button"
                            role="tab"
                            aria-controls="pills-products"
                            aria-selected="true"
                          >
                            All items
                          </button>
                        </li>
                        <li className="nav-item" role="presentation">
                          <button
                            className="nav-link btn btn-outline-danger"
                            id="pills-soldout-tab"
                            data-toggle="pill"
                            data-target="#pills-soldout"
                            type="button"
                            role="tab"
                            aria-controls="pills-soldout"
                            aria-selected="false"
                          >
                            Sold Out
                          </button>
                        </li>
                        <li className="nav-item" role="presentation">
                          <button
                            className="nav-link btn btn-outline-danger"
                            id="pills-archived-tab"
                            data-toggle="pill"
                            data-target="#pills-archived"
                            type="button"
                            role="tab"
                            aria-controls="pills-archived"
                            aria-selected="false"
                          >
                            Archived
                          </button>
                        </li>
                      </ul>
                      <div
                        className="tab-content border-top"
                        id="pills-tabContent"
                      >
                        <div
                          className="tab-pane fade show active"
                          id="pills-products"
                          role="tabpanel"
                          aria-labelledby="pills-products-tab"
                        >
                          <div className="container">
                            <div className="col-md-3">
                              <input
                                type="text"
                                placeholder="Search"
                                className="mt-2 form-control"
                                onChange={(e) => setSearch(e.target.value)}
                              />
                            </div>
                            <div className="table-responsive mt-3">
                              <table className="table table-bordered table-striped">
                                <thead className="thead-dark">
                                  <tr>
                                    <th scope="col">Name</th>
                                    <th scope="col">Stock</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Photo</th>
                                    <th scope="col">Description</th>
                                    <th scope="col">Action</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {currentPosts
                                    .filter((product) => {
                                      return search.toLowerCase() === ""
                                        ? product
                                        : product.product_name
                                            .toLowerCase()
                                            .includes(search);
                                    })
                                    .map((product) => (
                                      <tr key={product.product_name}>
                                        <td>{product.product_name}</td>
                                        <td>{product.product_stock}</td>
                                        <td>Rp.{product.product_price}</td>
                                        <td>
                                          <img
                                            src={product.product_image}
                                            alt="product1"
                                            crossOrigin="anonymous"
                                            className="product-image"
                                            style={{
                                              maxWidth: "100px",
                                              maxHeight: "100px",
                                              objectFit: "contain",
                                              borderRadius: "4px",
                                            }}
                                          />
                                        </td>
                                        <td>{product.product_description}</td>
                                        <td className="col-12 d-flex align-items-center">
                                          <ModalUpdate
                                            id={product.product_id}
                                            name={product.product_name}
                                            stock={product.product_stock}
                                            price={product.product_price}
                                            description={
                                              product.product_description
                                            }
                                          >
                                            Update
                                          </ModalUpdate>
                                          <ModalDelete id={product.product_id}>
                                            Delete
                                          </ModalDelete>
                                        </td>
                                      </tr>
                                    ))}
                                </tbody>
                              </table>
                            </div>
                            <div className="d-flex justify-content-center mt-3">
                              <Pagination
                                totalPosts={product.length}
                                postsPerPage={postsPerPage}
                                setCurrentPage={setCurrentPage}
                                currentPage={currentPage}
                              />
                            </div>
                          </div>
                        </div>

                        <div
                          className="tab-pane fade"
                          id="pills-soldout"
                          role="tabpanel"
                          aria-labelledby="pills-soldout-tab"
                        >
                          <div className="container pl-4 pr-4"></div>
                        </div>
                        <div
                          className="tab-pane fade"
                          id="pills-archived"
                          role="tabpanel"
                          aria-labelledby="pills-archived-tab"
                        >
                          <div className="container pl-4 pr-4"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Order */}
              <div
                className="tab-pane fade"
                id="list-order"
                role="tabpanel"
                aria-labelledby="list-order-list"
              >
                <form onSubmit={handleSubmit}>
                  <div className="container ml-md-3">
                    <div className="card pl-3 col-sm-10 mb-3">
                      <div className="card-body">
                        <div className="pt-3 border-bottom">
                          <h3 style={{ fontWeight: 600 }}>Inventory</h3>
                        </div>
                        <div className="pt-2">
                          <div className="col-md-12 col-12 p-0">
                            <label
                              htmlFor="inputName"
                              className="col-sm-3 col-form-label text-secondary"
                            >
                              Name of goods
                            </label>
                            <div className="col-sm-9">
                              <input
                                type="name"
                                className="form-control"
                                id="inputName"
                                placeholder=""
                                onChange={handleChange}
                                name="product_name"
                                value={data.product_name}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card pl-3 col-sm-10 mb-3">
                      <div className="card-body">
                        <div className="pt-3 border-bottom">
                          <h3 style={{ fontWeight: 600 }}>Item details</h3>
                        </div>
                        <div className="pt-2">
                          <div className="col-md-12 col-12 p-0 mb-1">
                            <label
                              htmlFor="Category"
                              className="col-sm-3 col-form-label text-secondary"
                            >
                              Category
                            </label>
                            <div className="col-sm-9">
                              <select
                                className="form-control"
                                name="category_id"
                                value={data.category_id}
                                onChange={handleChange}
                              >
                                <option selected>Select category</option>
                                {category.map((category, index) => (
                                  <option
                                    key={index}
                                    value={category.category_id}
                                  >
                                    {category.category_name}
                                  </option>
                                ))}
                              </select>
                            </div>
                          </div>
                          <div className="col-md-12 col-12 p-0 mb-1">
                            <label
                              htmlFor="inputPrice"
                              className="col-sm-3 col-form-label text-secondary"
                            >
                              Unit price
                            </label>
                            <div className="col-sm-9">
                              <input
                                type="name"
                                className="form-control"
                                id="inputPrice"
                                placeholder=""
                                onChange={handleChange}
                                name="product_price"
                                value={data.product_price}
                              />
                            </div>
                          </div>
                          <div className="col-md-12 col-12 p-0 mb-1">
                            <label
                              htmlFor="inputStock"
                              className="col-sm-3 col-form-label text-secondary"
                            >
                              Stock
                            </label>
                            <div className="col-sm-9">
                              <input
                                type="name"
                                className="form-control"
                                id="inputStock"
                                placeholder=""
                                onChange={handleChange}
                                name="product_stock"
                                value={data.product_stock}
                              />
                            </div>
                          </div>
                          <div className="col-md-12 col-12 pl-3 mb-1">
                            <fieldset className="form-group row mt-4">
                              <legend className="col-form-label col-sm-2 float-sm-left pt-0 text-secondary">
                                Condition
                              </legend>
                              <div className="col-sm-6">
                                <div className="row pl-3">
                                  <div className="form-check col-sm-3">
                                    <input
                                      className="form-check-input"
                                      type="radio"
                                      name="gridRadios"
                                      id="gridRadios1"
                                      defaultValue="option1"
                                      defaultChecked=""
                                    />
                                    <label
                                      className="form-check-label text-secondary"
                                      htmlFor="gridRadios1"
                                    >
                                      {" "}
                                      New{" "}
                                    </label>
                                  </div>
                                  <div className="form-check col-sm-3">
                                    <input
                                      className="form-check-input"
                                      type="radio"
                                      name="gridRadios"
                                      id="gridRadios2"
                                      defaultValue="option2"
                                    />
                                    <label
                                      className="form-check-label text-secondary"
                                      htmlFor="gridRadios2"
                                    >
                                      {" "}
                                      Used{" "}
                                    </label>
                                  </div>
                                </div>
                              </div>
                            </fieldset>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card pl-3 col-sm-10 mb-3">
                      <div className="card-body">
                        <div className="pt-3 border-bottom">
                          <h3 style={{ fontWeight: 600 }}>Photo of goods</h3>
                        </div>
                        <div className="pt-2">
                          <div className="col-md-12 col-12 p-0">
                            <div className="col-sm-9">
                              <input
                                type="file"
                                className="form-control"
                                id="photo"
                                placeholder=""
                                onChange={handleUpload}
                                name="product_image"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card pl-3 col-sm-10 mb-3">
                      <div className="card-body">
                        <div className="pt-3 border-bottom">
                          <h3 style={{ fontWeight: 600 }}>Description</h3>
                        </div>
                        <div className="pt-2">
                          <div className="col-md-12 col-12 p-0">
                            <div className="col-sm-9">
                              <input
                                type="text"
                                className="form-control"
                                id="inputDescription"
                                placeholder=""
                                onChange={handleChange}
                                name="product_description"
                                value={data.product_description}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="btn btn-danger rounded-pill mb-3"
                      style={{ width: 100 }}
                    >
                      Save
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProfileSeller;

import React, { useEffect, useState } from "react";
import NavbarLogin from "../../components/NavbarLogin";
import ModalUpdate from "../../components/ModalUpdate/ModalUpdate";
import ModalDelete from "../../components/ModalDelete/ModalDelete";
import SidebarSeller from "../../components/SidebarSeller/SidebarSeller";
import { useDispatch, useSelector } from "react-redux";
import getProductAction from "../../config/redux/action/getProductAction";
import createProductAction from "../../config/redux/action/createProductAction";
import Pagination from "../../components/Pagination/Pagination";

const ProfileSeller = () => {
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
    name: "",
    stock: "",
    price: "",
    description: "",
  });

  let [photo, setPhoto] = useState(null);

  let handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
    // console.log(data);
  };

  let handleUpload = (e) => {
    setPhoto(e.target.files[0]);
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createProductAction(data, photo));
  };

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
                                type="email"
                                className="form-control"
                                id="inputName"
                                placeholder=""
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
                                type="email"
                                className="form-control"
                                id="inputPhone"
                                placeholder=""
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
                                type="email"
                                className="form-control"
                                id="inputPhone"
                                placeholder=""
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
                            type="button"
                            className="btn btn-danger rounded-pill w-100"
                            style={{ width: "fit-content" }}
                          >
                            Save
                          </button>
                        </div>
                      </div>
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
                                className="mt-2"
                                style={{
                                  width: "200px",
                                  padding: "8px",
                                  borderRadius: "15px",
                                }}
                                onChange={(e) => setSearch(e.target.value)}
                              />
                            </div>
                            <table className="table table-striped table-dark mt-3">
                              <thead>
                                <tr>
                                  <th scope="col">Id</th>
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
                                      : product.name
                                          .toLowerCase()
                                          .includes(search);
                                  })
                                  .map((product) => (
                                    <tr key={product.name}>
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
                                        <ModalUpdate
                                          id={product.id}
                                          name={product.name}
                                          stock={product.stock}
                                          price={product.price}
                                          description={product.description}
                                        >
                                          Update
                                        </ModalUpdate>
                                        <ModalDelete id={product.id}>
                                          Delete
                                        </ModalDelete>
                                      </td>
                                    </tr>
                                  ))}
                              </tbody>
                                  <div className="d-flex m-1">
                                    <Pagination
                                      totalPosts={product.length}
                                      postsPerPage={postsPerPage}
                                      setCurrentPage={setCurrentPage}
                                      currentPage={currentPage}
                                    />
                                  </div>
                            </table>
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
                                name="name"
                                value={data.name}
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
                                name="price"
                                value={data.price}
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
                                name="stock"
                                value={data.stock}
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
                                name="photo"
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
                                type="name"
                                className="form-control"
                                id="inputDescription"
                                placeholder=""
                                onChange={handleChange}
                                name="description"
                                value={data.description}
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

import React, { useEffect, useState } from "react";
import "./style.module.css";
import NavbarLogin from "../../components/NavbarLogin";
import Swal from "sweetalert2";
import axios from "axios";
import AddressContent from "../../components/AddressSetup/AddressContent";

const Profile = () => {

  const getCustomer = localStorage.getItem("customer_id");

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

  const [dataCustomer, setDataCustomer] = useState({
    customer_name: "",
    customer_email: "",
    customer_phone: ""
  });

  const handleChangeCustomer = (e) => {
    setDataCustomer({
      ...dataCustomer,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    await axios
      .put(`${process.env.REACT_APP_API_URL}/customer/profile/${getCustomer}`, dataCustomer)
      .then((response) => {
        Toast.fire({
          title: "Update profile successfully!.",
          icon: "success",
        })
        setDataCustomer(response);
        window.location.reload();
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    const getCustomer = localStorage.getItem("customer_id");
    axios
      .get(`${process.env.REACT_APP_API_URL}/customer/profile/${getCustomer}`)
      .then((response) => setDataCustomer(response.data.data[0]))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <NavbarLogin />
      <section>
        <div className="row m-0 metropolis" id="profile-main" style={{height: "91vh"}}>
          {/* Left side profile */}
          <div
            className="col-md-3 col-12"
            style={{ backgroundColor: "white", width: "25%" }}
          >
            <div className="row">
              <div
                className="col-md-4"
                style={{ backgroundColor: "white" }}
              ></div>
              <div className="col-md-8 mt-5">
                <div className="row">
                  <div className="col-md-3 col-3 ml-0 profile-photo">
                    <img
                      src={require("../../assets/image/profile-photo.png")}
                      alt="profile-img"
                      style={{ width: 50 }}
                      className="rounded-circle"
                    />
                  </div>
                  <div className="col-md-9 col-9 pt-1">
                    <p className="mt-0 mb-0 font-weight-bold text-body">
                      {dataCustomer.customer_name}
                    </p>
                    <img src={require("../../assets/image/pen.png")} alt="pen" />
                    <span style={{ color: "#9B9B9B", fontSize: 14 }}>
                      Ubah profile
                    </span>
                  </div>
                </div>
                <div
                  className="list-group mt-3"
                  id="list-tab"
                  role="tablist"
                  style={{ marginLeft: "-15px", marginRight: "-16px" }}
                >
                  <a
                    className="list-group-item btn btn-light list-group-item-action"
                    id="list-home-list"
                    data-toggle="list"
                    href="#list-home"
                    role="tab"
                    aria-controls="home"
                    style={{ border: "none" }}
                  >
                    <div className="form-inline">
                      <button
                        className="rounded-circle btn btn-primary"
                        style={{ border: "none" }}
                        alt=""
                      >
                        <img
                          className="pb-1"
                          src={require("../../assets/image/profile-icon.png")}
                          alt=""
                        />
                      </button>
                      <p className="pt-3 ml-2">My account</p>
                    </div>
                  </a>
                  <a
                    className="list-group-item btn btn-light list-group-item-action"
                    id="list-Shipping-list"
                    data-toggle="list"
                    href="#list-Shipping"
                    role="tab"
                    aria-controls="Shipping"
                    style={{ border: "none" }}
                  >
                    <div className="form-inline">
                      <button
                        className="rounded-circle btn btn-warning"
                        style={{ border: "none" }}
                        alt=""
                      >
                        <img
                          className="pb-1"
                          src={require("../../assets/image/location.png")}
                          alt=""
                        />
                      </button>
                      <p className="pt-3 ml-2">Shipping address</p>
                    </div>
                  </a>
                  <a
                    className="list-group-item btn btn-light list-group-item-action"
                    id="list-order-list"
                    data-toggle="list"
                    href="#list-order"
                    role="tab"
                    aria-controls="order"
                    style={{ border: "none" }}
                  >
                    <div className="form-inline">
                      <button
                        className="rounded-circle btn btn-danger"
                        style={{ border: "none" }}
                        alt=""
                      >
                        <img
                          className="pb-1"
                          src={require("../../assets/image/order-list.png")}
                          alt=""
                        />
                      </button>
                      <p className="pt-3 ml-2">My order</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Right side Profile */}
          <div
            className="col-md-9 col-12 pt-5"
            style={{ backgroundColor: "#F5F5F5"}}
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
                        <h3 style={{ fontWeight: 600 }}>My profile</h3>
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
                                Name
                              </label>
                              <div className="col-sm-9">
                                <input
                                  type="text"
                                  className="form-control"
                                  id="inputName"
                                  placeholder=""
                                  name="customer_name"
                                  value={dataCustomer.customer_name}
                                  onChange={handleChangeCustomer}
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
                                  name="customer_email"
                                  value={dataCustomer.customer_email}
                                  onChange={handleChangeCustomer}
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
                                  name="customer_phone"
                                  value={dataCustomer.customer_phone}
                                  onChange={handleChangeCustomer}
                                />
                              </div>
                            </div>
                            <fieldset className="form-group row mt-4">
                              <legend className="col-form-label col-sm-3 float-sm-left pt-0 text-secondary">
                                Gender
                              </legend>
                              <div className="col-sm-9">
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
                                      Laki-laki{" "}
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
                                      Perempuan{" "}
                                    </label>
                                  </div>
                                </div>
                              </div>
                            </fieldset>
                            <div className="form-group row mt-4">
                              <label
                                className="col-sm-3 col-form-label"
                                style={{ color: "#9B9B9B" }}
                              >
                                Date of birth
                              </label>
                              <div className="col-sm-9 pl-4 row ml-0">
                                <select className="custom-select col-3 mr-2">
                                  <option selected="">1</option>
                                  <option>2</option>
                                  <option>3</option>
                                  <option>4</option>
                                  <option>5</option>
                                  <option>6</option>
                                  <option>7</option>
                                  <option>8</option>
                                  <option>9</option>
                                  <option>10</option>
                                  <option>11</option>
                                  <option>12</option>
                                  <option>13</option>
                                  <option>14</option>
                                  <option>15</option>
                                  <option>16</option>
                                  <option>17</option>
                                  <option>18</option>
                                  <option>19</option>
                                  <option>20</option>
                                  <option>21</option>
                                  <option>22</option>
                                  <option>23</option>
                                  <option>24</option>
                                  <option>25</option>
                                  <option>26</option>
                                  <option>27</option>
                                  <option>28</option>
                                  <option>29</option>
                                  <option>30</option>
                                  <option>31</option>
                                </select>
                                <select className="custom-select col-4 mr-2">
                                  <option selected="">January</option>
                                  <option value={1}>February</option>
                                  <option value={2}>March</option>
                                  <option value={3}>April</option>
                                  <option value={4}>May</option>
                                  <option value={5}>June</option>
                                  <option value={6}>July</option>
                                  <option value={7}>August</option>
                                  <option value={8}>September</option>
                                  <option value={9}>October</option>
                                  <option value={10}>November</option>
                                  <option value={11}>December</option>
                                </select>
                                <select className="custom-select col-3 mr-2">
                                  <option selected="">1977</option>
                                  <option>1978</option>
                                  <option>1979</option>
                                  <option>1980</option>
                                  <option>1981</option>
                                  <option>1982</option>
                                  <option>1983</option>
                                  <option>1984</option>
                                  <option>1985</option>
                                  <option>1986</option>
                                  <option>1987</option>
                                  <option>1988</option>
                                  <option>1989</option>
                                  <option>1990</option>
                                  <option>1991</option>
                                  <option>1992</option>
                                  <option>1993</option>
                                  <option>1994</option>
                                  <option>1995</option>
                                  <option>1996</option>
                                  <option>1997</option>
                                  <option>1998</option>
                                  <option>1999</option>
                                  <option>2000</option>
                                  <option>2001</option>
                                  <option>2002</option>
                                  <option>2003</option>
                                  <option>2004</option>
                                  <option>2005</option>
                                  <option>2006</option>
                                  <option>2007</option>
                                  <option>2008</option>
                                  <option>2009</option>
                                  <option>2010</option>
                                </select>
                              </div>
                            </div>
                          </div>
                          <div id="border-profile" className="col-md-3 ml-3">
                            <img
                              className="pl-5 mb-3 d-flex justify-content-center"
                              src={require("../../assets/image/Large-photo-profile.png")}
                              alt=""
                            />
                            <button
                              type="button"
                              className="btn btn-outline-info rounded-pill ml-5"
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
              {/* Address */}
              {/* <div
                className="tab-pane fade"
                id="list-Shipping"
                role="tabpanel"
                aria-labelledby="list-Shipping-list"
              >
                <div className="card md-ml-0 col-sm-10">
                  <div className="card-body">
                    <div className="pt-3 border-bottom">
                      <h3 style={{ fontWeight: 600 }}>
                        Choose another address
                      </h3>
                      <p className="text-secondary">
                        Manage your shipping address
                      </p>
                    </div>
                    <div className="pt-3">
                      <div className="container pl-5 pr-5 mb-5">
                        <div
                          className="col-md-12 mb-4"
                          data-toggle="modal"
                          data-target="#exampleModal"
                          style={{
                            border: "2px dashed lightgray",
                            borderRadius: 4,
                          }}
                        >
                          <p
                            className="col-12 text-secondary pt-3"
                            style={{
                              display: "flex",
                              justifyContent: "center",
                            }}
                          >
                            Add new address
                          </p>
                        </div>
                        <div
                          className="modal fade"
                          id="exampleModal"
                          tabIndex={-1}
                          aria-labelledby="exampleModalLabel"
                          aria-hidden="true"
                        >
                          <div className="modal-dialog modal-lg">
                            <div className="modal-content">
                              <div className="modal-header">
                                <h5
                                  className="col-12 pt-3"
                                  style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    fontWeight: 600,
                                  }}
                                >
                                  Add new address
                                </h5>
                                <button
                                  type="button"
                                  className="close"
                                  data-dismiss="modal"
                                  aria-label="Close"
                                  style={{ marginLeft: "-100px" }}
                                >
                                  <span aria-hidden="true">×</span>
                                </button>
                              </div>
                              <div className="modal-body">
                                <form>
                                  <div className="form-row">
                                    <div className="col-md-12 mb-3">
                                      <label htmlFor="address-description">
                                        Save address as (ex : home address,
                                        office address)
                                      </label>
                                      <input
                                        type="text"
                                        className="form-control"
                                        id="address-description"
                                        placeholder=""
                                        required=""
                                      />
                                    </div>
                                  </div>
                                  <div className="form-row">
                                    <div className="col-md-6 mb-3">
                                      <label htmlFor="address-description">
                                        Recipient’s name
                                      </label>
                                      <input
                                        type="text"
                                        className="form-control"
                                        id="address-description"
                                        required=""
                                      />
                                    </div>
                                    <div className="col-md-6 mb-3">
                                      <label htmlFor="validationDefault02">
                                        Recipient's telephone number
                                      </label>
                                      <input
                                        type="text"
                                        className="form-control"
                                        id="validationDefault02"
                                        required=""
                                      />
                                    </div>
                                  </div>
                                  <div className="form-row">
                                    <div className="col-md-6 mb-3">
                                      <label htmlFor="validationDefault01">
                                        Postal code
                                      </label>
                                      <input
                                        type="text"
                                        className="form-control"
                                        id="validationDefault01"
                                        required=""
                                      />
                                    </div>
                                    <div className="col-md-6 mb-3">
                                      <label htmlFor="validationDefault02">
                                        Postal code
                                      </label>
                                      <input
                                        type="text"
                                        className="form-control"
                                        id="validationDefault02"
                                        required=""
                                      />
                                    </div>
                                  </div>
                                  <div className="form-row">
                                    <div className="col-md-6 mb-3">
                                      <label htmlFor="validationDefault03">
                                        City or Subdistrict
                                      </label>
                                      <input
                                        type="text"
                                        className="form-control"
                                        id="validationDefault03"
                                        required=""
                                      />
                                    </div>
                                  </div>
                                  <div className="form-group">
                                    <div className="form-check">
                                      <input
                                        className="form-check-input"
                                        type="checkbox"
                                        defaultValue=""
                                        id="invalidCheck2"
                                        required=""
                                      />
                                      <label
                                        className="form-check-label"
                                        htmlFor="invalidCheck2"
                                      >
                                        {" "}
                                        Make it primary address{" "}
                                      </label>
                                    </div>
                                  </div>
                                </form>
                              </div>
                              <div className="modal-footer d-flex justify-content-end pb-4">
                                <button
                                  type="button"
                                  className="btn btn-outline-secondary rounded-pill mr-2"
                                  style={{ width: 130 }}
                                  data-dismiss="modal"
                                >
                                  Cancel
                                </button>
                                <button
                                  type="button"
                                  className="btn btn-danger rounded-pill"
                                  data-dismiss="modal"
                                  style={{ width: 130 }}
                                >
                                  Save
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="card-body col-md-12 border border-danger rounded mt-4 pl-sm-5">
                          <h5 className="card-title">Andreas Jane</h5>
                          <p className="card-text">
                            Perumahan Sapphire Mediterania, Wiradadi, Kec.
                            Sokaraja, Kabupaten Banyumas, Jawa Tengah, 53181
                            [Tokopedia Note: blok c 16] Sokaraja, Kab. Banyumas,
                            53181.
                          </p>
                          <h5 className="text-danger">Change address</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
              <AddressContent />
              {/* Order */}
              <div
                className="tab-pane fade ml-3"
                id="list-order"
                role="tabpanel"
                aria-labelledby="list-order-list"
              >
                <div className="card col-sm-10">
                  <div className="card-body">
                    <div className="container">
                      <ul
                        className="nav nav-pills d-flex justify-content-around pt-3 mb-3"
                        id="pills-tab"
                        role="tablist"
                      >
                        <li className="nav-item" role="presentation">
                          <button
                            className="nav-link btn btn-outline-danger active"
                            id="pills-home-tab"
                            data-toggle="pill"
                            data-target="#pills-home"
                            type="button"
                            role="tab"
                            aria-controls="pills-home"
                            aria-selected="true"
                          >
                            All items
                          </button>
                        </li>
                        <li className="nav-item" role="presentation">
                          <button
                            className="nav-link btn btn-outline-danger"
                            id="pills-notPaid-tab"
                            data-toggle="pill"
                            data-target="#pills-notPaid"
                            type="button"
                            role="tab"
                            aria-controls="pills-notPaid"
                            aria-selected="false"
                          >
                            Not yet paid
                          </button>
                        </li>
                        <li className="nav-item" role="presentation">
                          <button
                            className="nav-link btn btn-outline-danger"
                            id="pills-Packed-tab"
                            data-toggle="pill"
                            data-target="#pills-Packed"
                            type="button"
                            role="tab"
                            aria-controls="pills-Packed"
                            aria-selected="false"
                          >
                            Packed
                          </button>
                        </li>
                        <li className="nav-item" role="presentation">
                          <button
                            className="nav-link btn btn-outline-danger"
                            id="pills-Sent-tab"
                            data-toggle="pill"
                            data-target="#pills-Sent"
                            type="button"
                            role="tab"
                            aria-controls="pills-Sent"
                            aria-selected="false"
                          >
                            Sent
                          </button>
                        </li>
                        <li className="nav-item" role="presentation">
                          <button
                            className="nav-link btn btn-outline-danger"
                            id="pills-Completed-tab"
                            data-toggle="pill"
                            data-target="#pills-Completed"
                            type="button"
                            role="tab"
                            aria-controls="pills-Completed"
                            aria-selected="false"
                          >
                            Completed
                          </button>
                        </li>
                        <li className="nav-item" role="presentation">
                          <button
                            className="nav-link btn btn-outline-danger"
                            id="pills-Order-tab"
                            data-toggle="pill"
                            data-target="#pills-Order"
                            type="button"
                            role="tab"
                            aria-controls="pills-Order"
                            aria-selected="false"
                          >
                            Order cancel
                          </button>
                        </li>
                      </ul>
                    </div>
                    <div
                      className="tab-content text-white"
                      id="pills-tabContent"
                    >
                      <div
                        className="tab-pane fade show active border-top"
                        id="pills-home"
                        role="tabpanel"
                        aria-labelledby="pills-home-tab"
                      >
                        <div className="container pl-4 pr-4">
                          <p />
                        </div>
                      </div>
                      <div
                        className="tab-pane fade border-top"
                        id="pills-notPaid"
                        role="tabpanel"
                        aria-labelledby="pills-notPaid-tab"
                      >
                        <div className="container pl-4 pr-4"></div>
                      </div>
                      <div
                        className="tab-pane fade border-top"
                        id="pills-Packed"
                        role="tabpanel"
                        aria-labelledby="pills-Packed-tab"
                      >
                        <div className="container pl-4 pr-4"></div>
                      </div>
                      <div
                        className="tab-pane fade border-top"
                        id="pills-Sent"
                        role="tabpanel"
                        aria-labelledby="pills-Sent-tab"
                      >
                        <div className="container pl-4 pr-4"></div>
                      </div>
                      <div
                        className="tab-pane fade border-top"
                        id="pills-Completed"
                        role="tabpanel"
                        aria-labelledby="pills-Completed-tab"
                      >
                        <div className="container pl-4 pr-4"></div>
                      </div>
                      <div
                        className="tab-pane fade border-top"
                        id="pills-Order"
                        role="tabpanel"
                        aria-labelledby="pills-Order-tab"
                      >
                        <div className="container pl-4 pr-4"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Profile;

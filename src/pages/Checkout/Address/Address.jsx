import axios from "axios";
import React, { useEffect, useState } from "react";
import ListAddress from "./ListAddress";

const Address = () => {
  let [address, setAddress] = useState([]);

  useEffect(() => {
    const customer_id = localStorage.getItem("customer_id");
    axios
      .get(`${process.env.REACT_APP_API_URL}/address/${customer_id}`)
      .then((response) => setAddress(response.data.data[0]))
      .catch((error) => console.log(error));
  }, []);
  
  return (
    <>
      <div
        className="product mt-3"
        style={{
          boxShadow: "0px 0px 10px #29292940, 0px 0px 25px #fff",
          borderRadius: 10,
          padding: "10px 0",
        }}
      >
        <div className="col-md-4 mt-3">
          <p style={{ fontSize: 20, fontWeight: "bold" }}>{address.address_name}</p>
        </div>
        <div className="col-md-12">
          <p className="teks card-title">
            Place address : {address.address_place}
          </p>
          <p className="teks card-title">
            {address.address_street}, {address.address_city}, {address.addreass_postal}
          </p>
          <p className="teks card-title">
            No. Telephone : {address.address_phone}
          </p>
        </div>
        {/* List Address Modal */}
        <div className="col-md-5 pb-2">
          <button
            className="btn btn-md btn-block"
            data-toggle="modal"
            data-target="#addressModal"
            style={{
              borderRadius: 20,
              background: "none",
              color: "#9b9b9b",
              borderColor: "#9b9b9b",
            }}
          >
            Choose another address
          </button>
        </div>
        <div
          className="modal fade"
          id="addressModal"
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg">
            <div className="modal-content" style={{ padding: 30 }}>
              <div className="modal-header">
                <h5
                  className="col-12"
                  id="exampleModalLabel"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    fontWeight: 600,
                    fontSize: 28,
                  }}
                >
                  Choose another address
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                  style={{
                    fontSize: 42,
                    fontWeight: "bold",
                    marginLeft: "-5px",
                    marginTop: "-55px",
                  }}
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <div
                  className="col-md-12"
                  style={{
                    border: "2px dashed #9B9B9B",
                    borderRadius: 5,
                    padding: "10px 0",
                  }}
                >
                  <a
                    href="/"
                    className="col-12 pt-3"
                    data-toggle="modal"
                    data-target="#addressFormModal"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      color: "#9B9B9B",
                      padding: "10px 0",
                    }}
                  >
                    Add new address
                  </a>
                </div>
                <ListAddress />
              </div>
            </div>
          </div>
        </div>
        {/* Add Address modal */}
        <div
          className="modal fade"
          id="addressFormModal"
          tabIndex={-1}
          aria-labelledby="addressFormModalLabel"
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
                        Save address as (ex : home address, office address)
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
                      <label htmlFor="validationDefault01">Postal code</label>
                      <input
                        type="text"
                        className="form-control"
                        id="validationDefault01"
                        required=""
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="validationDefault02">Postal code</label>
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
      </div>
    </>
  );
};

export default Address;

import axios from "axios";
import React, { useState } from "react";
import Swal from "sweetalert2";

const ModalCreateAddress = () => {
  const customer_id = localStorage.getItem("customer_id");

  const [address, setAddress] = useState({
    address_name: "",
    address_street: "",
    address_phone: "",
    address_postal: "",
    address_city: "",
    address_place: "",
    customer_id: customer_id,
  });

  let handleChange = (e) => {
    setAddress({
      ...address,
      [e.target.name]: e.target.value,
    });
    console.log(address)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${process.env.REACT_APP_API_URL}/address`, address)
      .then((res) => {
        if (res.data.statusCode === 201) {
            Swal.fire({
              title: "New Address Added",
              text: "New address have been added",
              icon: "success",
            });
        }
        setAddress(res.data.data);
        setTimeout(function () {
          window.location.reload(1);
        }, 2000);
      })
      .catch((err) => {
        console.log(err.res);
      });
  };
  return (
    <>
    <form  onSubmit={handleSubmit}>
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
                      Save address as (ex : home address, office address)
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="address-description"
                      placeholder=""
                      required=""
                      name="address_place"
                      value={address.address_place}
                      onChange={handleChange}
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
                      name="address_name"
                      value={address.address_name}
                      onChange={handleChange}
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
                      name="address_phone"
                      value={address.address_phone}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="validationDefault01">Address</label>
                    <input
                      type="text"
                      className="form-control"
                      id="validationDefault01"
                      required=""
                      name="address_street"
                      value={address.address_street}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="validationDefault02">Postal code</label>
                    <input
                      type="text"
                      className="form-control"
                      id="validationDefault02"
                      required=""
                      name="address_postal"
                      value={address.address_postal}
                      onChange={handleChange}
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
                      placeholder="City, Province"
                      name="address_city"
                      value={address.address_city}
                      onChange={handleChange}
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
                    <label className="form-check-label" htmlFor="invalidCheck2">
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
                type="submit"
                className="btn btn-danger rounded-pill"
                // data-dismiss="modal"
                style={{ width: 130 }}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
    </>
  );
};

export default ModalCreateAddress;

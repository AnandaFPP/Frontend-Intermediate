import axios from "axios";
import React, { useEffect, useState } from "react";

const ListAddress = () => {
  let [addressList, setAddressList] = useState([]);

  useEffect(() => {
    const customer_id = localStorage.getItem("customer_id");
    axios
      .get(`${process.env.REACT_APP_API_URL}/address/${customer_id}`)
      .then((response) => setAddressList(response.data.data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <>
      {addressList.map((address, index) => (
        <div className="card-body col-md-12 border border-danger rounded mt-4">
          <h5 className="card-title">{address.address_name}</h5>
          <p className="card-text">Place address : {address.address_place}</p>
          <p className="card-text">
            {address.address_street}, {address.address_city},{" "}
            {address.addreass_postal}
          </p>
          <p className="card-text">No. Telephone : {address.address_phone}</p>
          <h5 className="text-danger">Change address</h5>
        </div>
      ))}
    </>
  );
};

export default ListAddress;

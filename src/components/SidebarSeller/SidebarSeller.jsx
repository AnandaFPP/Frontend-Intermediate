import React from "react";

const SidebarSeller = () => {
  return (
    <>
      <div
        className="col-md-3 col-12"
        style={{ backgroundColor: "white", width: "25%" }}
      >
        <div className="row">
          <div className="col-md-4" style={{ backgroundColor: "white" }}></div>
          <div className="col-md-8 mt-5">
            <div className="row">
              <div className="col-md-3 col-3 pl-1">
                <img
                  src={require("../../assets/image/profile-photo.png")}
                  alt="profile-img"
                  style={{ width: 50 }}
                  className="rounded-circle"
                />
              </div>
              <div className="col-md-9 col-9 pt-1">
                <p className="mt-0 mb-0 font-weight-bold text-body">
                  Johanes Mikael
                </p>
                <img
                  src={require("../../assets/image/pen.png")}
                  alt="pen-img"
                />
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
                      src={require("../../assets/image/home (2) 1.png")}
                      alt="home-img"
                    />
                  </button>
                  <p className="pt-3 ml-2">Store</p>
                </div>
              </a>
              <a
                className="list-group-item btn btn-light list-group-item-action"
                id="list-products-list"
                data-toggle="list"
                href="#list-products"
                role="tab"
                aria-controls="productslist-products"
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
                      src={require("../../assets/image/package 1.png")}
                      alt="package-img"
                    />
                  </button>
                  <p className="pt-3 ml-2">Product</p>
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
                      src={require("../../assets/image/shop-cart.png")}
                      alt="shop-img"
                    />
                  </button>
                  <p className="pt-3 ml-2">Selling Product</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SidebarSeller;

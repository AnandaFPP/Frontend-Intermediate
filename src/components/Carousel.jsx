import React from "react";

const Carousel = () => {
  return (
    <>
    <style>
        .carousel {"{"}
        width: 600px; display: block; margin-left: auto; margin-right: auto;
        margin-top: 100px;
        {"}"}
      </style>
      <div className="container">
        <div className="row">
          <div id="carouselMain" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
              <li
                data-target="#carouselMain"
                data-slide-to={0}
                className="active"
              />
              <li data-target="#carouselMain" data-slide-to={1} />
              <li data-target="#carouselMain" data-slide-to={2} />
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active col-12">
                <img
                  src={require("../assets/image/promotionCard.png")}
                  className="w-100"
                  alt="Promotion"
                />
              </div>
              <div className="carousel-item col-12">
                <img
                  src={require("../assets/image/promotionCard2.png")}
                  className="w-100"
                  alt="Promotion2"
                />
              </div>
              <div className="carousel-item col-12">
                <img
                  src={require("../assets/image/promotionCard.png")}
                  className="w-100"
                  alt="Promotion"
                />
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-target="#carouselMain"
                data-slide="prev"
              >
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="sr-only">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-target="#carouselMain"
                data-slide="next"
              >
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="sr-only">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Carousel;

import React, { useEffect, useState } from "react";
import Slider from "react-slick";

const Category = () => {
  const [slidesToShow, setSlidesToShow] = useState(4);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  const updateSlidesToShow = () => {
    if (window.innerWidth >= 1024) {
      setSlidesToShow(5);
    } else if (window.innerWidth >= 768) {
      setSlidesToShow(4);
    } else {
      setSlidesToShow(2);
    }
  };

  useEffect(() => {
    updateSlidesToShow();
    window.addEventListener("resize", updateSlidesToShow);
    return () => {
      window.removeEventListener("resize", updateSlidesToShow);
    };
  }, []);

  return (
    <section className="mt-5 metropolis">
      <div className="container">
        <h2 style={{ fontWeight: "bold" }}>Category</h2>
        <p className="">What are you currently looking for?</p>
        <Slider {...settings}>
        <div className="mb-5">
            <img
              className="category"
              src={require("../assets/image/pants.png")}
              alt="pants"
              style={{ width: 165, height: 170}}
            />
          </div>
          <div className="mb-5">
            <img
              className="category"
              src={require("../assets/image/jacket.png")}
              alt="jacket"
              style={{ width: 165, height: 170}}
            />
          </div>
          <div className="mb-5">
            <img
              className="category"
              src={require("../assets/image/shorts.png")}
              alt="shorts"
              style={{ width: 165, height: 170}}
            />
          </div>
          <div className="mb-5">
            <img
              className="category"
              src={require("../assets/image/tshirt.png")}
              alt="t-shirt"
              style={{ width: 165, height: 170}}
            />
          </div>
          <div className="mb-5">
            <img
              className="category"
              src={require("../assets/image/category1.png")}
              alt="category"
              style={{ width: 165, height: 170}}
            />
          </div>
          <div className="mb-5">
            <img
              className="category"
              src={require("../assets/image/category2.png")}
              alt="category"
              style={{ width: 165, height: 170}}
            />
          </div>
          <div className="mb-5">
            <img
              className="category"
              src={require("../assets/image/category3.png")}
              alt="category"
              style={{ width: 165, height: 170}}
            />
          </div>
          <div className="mb-5">
            <img
              className="category"
              src={require("../assets/image/category4.png")}
              alt="category"
              style={{ width: 165, height: 170}}
            />
          </div>
          <div className="mb-5">
            <img
              className="category"
              src={require("../assets/image/category5.png")}
              alt="category"
              style={{ width: 165, height: 170}}
            />
          </div>
          <div className="mb-5">
            <img
              className="category"
              src={require("../assets/image/category6.png")}
              alt="category"
              style={{ width: 165, height: 170}}
            />
          </div>
          <div className="mb-5">
            <img
              className="category"
              src={require("../assets/image/category7.png")}
              alt="category"
              style={{ width: 165, height: 170}}
            />
          </div>
          <div className="mb-5">
            <img
              className="category"
              src={require("../assets/image/category8.png")}
              alt="category"
              style={{ width: 165, height: 170}}
            />
          </div>
          <div className="mb-5">
            <img
              className="category"
              src={require("../assets/image/category9.png")}
              alt="category"
              style={{ width: 165, height: 170}}
            />
          </div>
          <div className="mb-5">
            <img
              className="category"
              src={require("../assets/image/category10.png")}
              alt="category"
              style={{ width: 165, height: 170}}
            />
          </div>
          <div className="mb-5">
            <img
              className="category"
              src={require("../assets/image/category11.png")}
              alt="category"
              style={{ width: 165, height: 170}}
            />
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default Category;

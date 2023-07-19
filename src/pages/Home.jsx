import React from "react";
import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";
import Category from "../components/Category";
import Product from "./Product";
import NavbarLogin from "../components/NavbarLogin";

const Home = () => {

const isAuth = localStorage.getItem("token")

  if (!isAuth) {
    return (
      <>
        <Navbar/>
        <Carousel/>
        <Category/>
        <Product/>
      </>
    );
  } else {
    return (
      <>
        <NavbarLogin />
        <Carousel/>
        <Category/>
        <Product/>
      </>  
    )
  }
}

export default Home;

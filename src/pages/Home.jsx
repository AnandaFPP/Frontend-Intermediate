import React from "react";
// import ModalCreate from "../components/ModalCreate";
// import ModalUpdate from "../components/ModalUpdate";
// import ModalDelete from "../components/ModalDelete";
import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";
import Category from "../components/Category";
import NewProduct from "../components/NewProduct";
import Populer from "../components/Populer";

const Home = () => {
  return (
    <>
      <Navbar/>
      <Carousel/>
      <Category/>
      <NewProduct/>
      <Populer/>
    </>
  );
};

export default Home;

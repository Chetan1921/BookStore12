import React from "react";
import Navbar from "../components/Navbar";
import FreeBook from "../components/FreeBook";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import Testimonial from "../components/testimonial";
function Homes() {
  return (
    <>
      <Navbar />
      <Banner />
      <FreeBook />
      <Testimonial/>
      <Footer />
    </>
  );
}

export default Homes;

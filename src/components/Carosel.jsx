import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import banner1 from "../assets/banner1.jpg";
import banner2 from "../assets/banner2.jpg";
import banner3 from "../assets/banner3.jpg";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 400 },
    items: 1,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 400, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const Carosel = () => {
  return (
    <Carousel
      responsive={responsive}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={3000}
      keyBoardControl={true}
      transitionDuration={600}
      className="md:h-full lg:h-96 z-10"
    >
      <div className="w-full h-full ">
        <img
          src={banner1}
          alt="Banner 1"
          className=" w-full  h-full object-cover object-center cursor-grab"
        />
      </div>
      <div className="w-full  h-full">
        <img
          src={banner2}
          alt="Banner 2"
          className="w-full  h-full object-cover object-center cursor-grab"
        />
      </div>
      <div className="w-full  h-full">
        <img
          src={banner3}
          alt="Banner 3"
          className="w-full  h-full object-cover object-center cursor-grab"
        />
      </div>
    </Carousel>
  );
};

export default Carosel;

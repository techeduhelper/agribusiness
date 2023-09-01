import React from "react";
import img1 from "../assets/Amruth_organics.jpg";
import img2 from "../assets/Cormandel.png";
import img3 from "../assets/Cropex_logo.jpeg";
import img4 from "../assets/SCIL.jpg";
import img5 from "../assets/rallis.png";
import img6 from "../assets/green.png";
import img7 from "../assets/Samarth-logo_i6P0o7e.jpg";
const Collaboration = () => {
  const images = [img1, img2, img3, img4, img5, img6, img7];
  return (
    <>
      <div className="collaboration-container text-center lg:mx-32 sm:mx-2 mb-2 ">
        <span className="text-xl font-semibold text-green-900">
          Collaboration
        </span>
        <div className="slider relative flex lg:h-40 sm:h-24 mt-8  items-center overflow-hidden">
          <div className="animation-image flex lg:h-40 gap-10 sm:h-24 items-center shadow-2xl">
            {images.map((image) => (
              <img
                src={image}
                className="py-2 px-2 lg:h-32 sm:h-20 border-8 shadow-xl cursor-pointer translate-x hover:translate-x-2 hover:duration-200"
              />
            ))}
            {images.map((image) => (
              <img
                src={image}
                className="py-2 px-2 lg:h-32 sm:h-20 border-8 shadow-xl cursor-pointer translate-x hover:translate-x-2 hover:duration-200"
              />
            ))}
          </div>
        </div>
        <div className="slider relative flex lg:h-40 sm:h-24 mt-8  items-center overflow-hidden">
          <div className="animation-image2 flex lg:h-40 gap-10 sm:h-24 items-center shadow-2xl">
            {images.map((image) => (
              <img
                key={image}
                src={image}
                className="py-2 px-2 lg:h-32 sm:h-20 border-8 shadow-xl cursor-pointer hover:translate-x-2 hover:duration-200 "
              />
            ))}{" "}
            console.log(image)
            {images.map((image) => (
              <img
                key={image}
                src={image}
                className="py-2 px-2 lg:h-32 sm:h-20 border-8 shadow-xl cursor-pointer translate-x hover:translate-x-2 hover:duration-200"
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Collaboration;

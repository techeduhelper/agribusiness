import React from "react";
import logo from "../assets/logo.png";

const Intro = () => {
  return (
    <div className="flex flex-col lg:mx-40  mt-2 items-center mb-4 sm:mx-4">
      <div className="flex flex-col gap-2 py-3 px-4 rounded-md text-justify font-bold justify-center items-center text-2xl bg-green-900 text-[#ffc100] border-4 border-yellow-400  lg:w-4/6">
        <span className="w-full text-center">
          Way2Agribusiness India Pvt. Ltd. (Way2ABI)
        </span>
        <span className="w-full text-center">
          ವೇ2ಅಗ್ರಿಬಿಸ್ನೆಸ್ ಇಂಡಿಯಾ ಪ್ರೈವೇಟ್ ಲಿಮಿಟೆಡ್
        </span>
      </div>
      <div className="w-full flex lg:flex-row sm:flex-col mt-3  lg:mx-0 bg-green-200 px-4 items-center lg:gap-5 sm:gap-2 rounded-bl-[3rem] rounded-tr-[3rem] sm:py-3 md:py-1 shadow-md">
        <div className="logo ">
          <img src={logo} alt="logo" className="h-40 lg:w-40 sm:w-full" />
        </div>
        <div
          style={{ textAlign: "justify" }}
          className="text pr-2 w-full sm:mb-4 lg:m-auto"
        >
          Way2Agribusiness India Pvt. Ltd. is a social enterprise, incorporated
          in March 2014, addressing the issue of agribusiness exposure and
          market knowledge on agri commodities and trading of agricultural
          produce and agri tech products. Our core focus is to assist
          transformation of agriculture or allied activities into agribusiness.
          Our objective is to be a one-stop solution provider for farmers and
          agribusiness enterprises with a mission to enhance the business
          competitiveness of participants in agri and allied sectors mainly
          farmers and agri-entrepreneurs through our enabling products and
          services.
        </div>
      </div>
    </div>
  );
};

export default Intro;

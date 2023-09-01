import React from "react";
import {
  AiFillEye,
  AiFillCompass,
  AiFillFlag,
  AiOutlineRise,
} from "react-icons/ai";

const Vision = () => {
  return (
    <>
      <div className="text-center lg:mx-40 sm:mx:4 mb-12">
        <span className="text-xl font-serif font-bold text-green-800">
          Our Vision & Mission
        </span>
        <div className="grid lg:grid-cols-2 gap-5 sm:grid-cols-1 mt-4  sm:mx-3 mb-4">
          <div className="flex flex-col items-center w-full">
            <div className="btn-animation flex items-center justify-center gap-2 text-lg font-semibold bg-green-800 text-[#ffc100] w-full py-1 rounded ">
              <AiFillEye size={30} /> Our Vision
            </div>
            <div className="text-left mt-2">
              To be a one-stop solution provider for farmers and whole gamut of
              agribusiness enterprises.
            </div>
          </div>
          <div className="flex flex-col items-center w-full">
            <div className="btn-animation flex items-center justify-center gap-2 text-lg font-semibold bg-green-800 text-[#ffc100] w-full py-1 rounded ">
              <AiFillCompass size={25} />
              Our Mission
            </div>
            <div className="text-left mt-2">
              To enhance the business competitiveness of participants in agri
              and allied sectors mainly farmers and agri-entrepreneurs through
              our enabling products and services.
            </div>
          </div>
        </div>
        <div className="grid lg:grid-cols-2 gap-5 sm:grid-cols-1 sm:mx-3 mb-4">
          <div className="flex flex-col w-full">
            <div className="btn-animation flex items-center justify-center gap-2 text-lg font-semibold bg-green-800 text-[#ffc100] w-full py-1 rounded ">
              <AiFillFlag size={25} />
              Our Objective
            </div>
            <div className="text-left mt-2">
              <ul className="list-disc ml-8">
                <li>
                  Provide research based consultancy services and contemporary
                  solutions to the clients in agribusiness sector
                </li>
                <li>
                  Facilitate project implementation and management for seamless
                  agribusiness operations
                </li>
                <li>
                  Undertake trading operations of selected agri outputs and
                  inputs incl. implements & machineries.
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col w-full">
            <div className="btn-animation flex items-center justify-center gap-2 text-lg font-semibold bg-green-800 text-[#ffc100] w-full py-1 rounded">
              <AiOutlineRise size={25} />
              Our Differentiators
            </div>
            <div className="text-left mt-2">
              <ul className="list-disc ml-8">
                <li>
                  Robust understanding of farming conditions in Karnataka and
                  knowledge repository
                </li>
                <li>
                  Strong network with agribusiness participants, industry and
                  the Govt. institutions
                </li>
                <li>
                  Innovative and wholesome services in all key areas agri
                  projects, output and inputs
                </li>
                <li>Online services, scalable and impactful services</li>
                <li>Also engaged in physical trading operations</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Vision;

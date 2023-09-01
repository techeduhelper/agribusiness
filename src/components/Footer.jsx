import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import {
  BsTwitter,
  BsPinterest,
  BsYoutube,
  BsInstagram,
  BsLinkedin,
  BsFillTelephoneFill,
} from "react-icons/bs";
import { FaMapMarkerAlt } from "react-icons/fa";
import { AiTwotoneMail } from "react-icons/ai";

import { Link } from "react-router-dom";
import Onservices from "./Onservices";

const Footer = () => {
  return (
    <>
      <div className="footer-container flex flex-col bg-green-700 pb-3 mt-4 lg:px-4 sm:px-2">
        <div className="logo-social-container border-b-yellow-400 mt-2 flex lg:flex-row sm:flex-col items-center justify-between lg:px-8 sm:gap-4 mb-3">
          <Link className="brand-container text-yellow-400 font-bold text-2xl cursor-pointer">
            Way2agribusiness
          </Link>
          <div className="social-container flex items-center gap-3 text-white ">
            <FaFacebookSquare
              size={30}
              className="hover:text-gray-300 hover:shadow-md cursor-pointer"
            />
            <BsTwitter
              size={30}
              className="hover:text-gray-300 hover:shadow-md cursor-pointer"
            />
            <BsPinterest
              size={30}
              className="hover:text-gray-300 hover:shadow-md cursor-pointer"
            />
            <BsYoutube
              size={30}
              className="hover:text-gray-300 hover:shadow-md cursor-pointer"
            />
            <BsInstagram
              size={30}
              className="hover:text-gray-300 hover:shadow-md cursor-pointer"
            />
            <BsLinkedin
              size={30}
              className="hover:text-gray-300 hover:shadow-md cursor-pointer"
            />
          </div>
        </div>
        <div className="w-full h-[0.2rem] bg-yellow-400"></div>
        <div className="footer-element flex lg:flex-row sm:flex-col justify-between w-full mt-4 mb-4 px-2">
          <div className="contact-us w-full flex justify-center  flex-col items-center h-full">
            <span className="text-white text-lg font-semibold lg:mb-2 sm:mb-4">
              Contact Us
            </span>
            <div className="flex lg:flex-row sm:flex-col justify-center w-full items-center gap-3 text-white font-medium ">
              <FaMapMarkerAlt size={32} />
              <div className="lg:text-justify sm:text-center">
                ಕೃಷಿ ಉದ್ದಿಮೆ ಕೇಂದ್ರ/ Agribusiness Center # 636, BDA Block 2,
                APMC (RMC) Yard, Yeshwanthpura, Bengaluru - 560022
              </div>
            </div>
            <div className="flex lg:flex-row sm:flex-col lg:justify-start sm:justify-center  w-full items-center gap-3 text-white font-medium mt-4">
              <BsFillTelephoneFill size={25} />
              <div className="grid grid-cols-2 gap-2">
                <span>9449004956</span>
                <span> 9449004956</span>
                <span>9449004956</span>
                <span> 9449004956</span>
              </div>
            </div>
            <div className="flex lg:flex-row sm:flex-col lg:justify-start sm:justify-center  w-full items-center gap-3 text-white font-medium mt-4">
              <AiTwotoneMail size={25} />
              <div className="flex flex-col sm:text-center lg:text-justify">
                <Link to={"mailto:dr.prasannad@way2agribusiness.com"}>
                  dr.prasannad@way2agribusiness.com
                </Link>
                <Link to={"mailto:way2agritech@way2agribusiness.com"}>
                  way2agritech@way2agribusiness.com
                </Link>
                <Link to={"mailto:way2agribusiness@gmail.com"}>
                  way2agribusiness@gmail.com
                </Link>
              </div>
            </div>
          </div>
          <div className="map w-full flex flex-col items-center lg:px-8 sm:mt-5 lg:mt-0">
            <span className="text-white text-lg font-semibold lg:mb-2 sm:mb-4">
              Location
            </span>
            <div className="border-2 border-yellow-400 w-full h-full">
              <iframe
                className="w-full h-full"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1943.6050773953866!2d77.54547795799927!3d13.022285093117015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3d6fbf2aa7ad%3A0x886c14d1df2c166b!2sWay2Agritech!5e0!3m2!1sen!2sin!4v1516097691514"
              ></iframe>
            </div>
          </div>
          <div className="services w-full flex flex-col items-center justify-center lg:px-3 sm:mt-5 lg:mt-0">
            <span className="text-white text-lg font-semibold lg:mb-2 sm:mb-4">
              Our Online Services
            </span>
            <Onservices />
          </div>
        </div>
        <div className="w-full h-[0.2rem] bg-yellow-400 mb-4"></div>
        <span className="text-center text-white">
          CopyRight © 2023 Way2Agribusines India Pvt Ltd. All Rights Reserved
        </span>
      </div>
    </>
  );
};

export default Footer;

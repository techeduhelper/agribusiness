import React from "react";
import img from "../assets/services.png";
import { Link } from "react-router-dom";

const Service = () => {
  return (
    <>
      <div className="service-container flex flex-col items-center mt-3 border-4 lg:mx-28 sm:mx-2    border-green-800">
        <span className="my-4 text-lg font-bold text-green-900 capitalize">
          Our Online services
        </span>
        <div className="flex lg:flex-row sm:flex-col w-full justify-between items-center gap-10 p-5">
          <div className="images w-full">
            <img src={img} className="rounded-full" />
          </div>
          <div className="w-full text-justify">
            <Link
              to={"/"}
              className="text-lg font-semibold mr-2 text-green-800"
            >
              www.way2agribusiness.com
            </Link>
            address the issue of agribusiness exposure and market knowledge on
            agri commodities and trading in agri-tech products and agricultural
            produce. Our core focus is to assist transformation of agriculture
            or farming activities into agribusiness.
            <br />
            <br />
            <Link
              to={"/"}
              className="text-lg font-semibold mr-2 text-green-800"
            >
              www.way2agritech.com
            </Link>
            is a comprehensive agri-technology solutions covering agri inputs,
            implements and machineries for the farmers and other users. The
            objective of Way2Agritech is to catalyst agricultural technology
            adoption by the farmers, knowledge transformation and promotion of
            quality agri-tech products and sales generation.
            <br />
            <br />
            <Link
              to={"/"}
              className="text-lg font-semibold mr-2 text-green-800"
            >
              www.way2foods.in
            </Link>
            is a unique business model by Way2ABI with a focus on providing
            convenience in supply of vegetables, fruits, food grains & other
            food products to the HORECA segment, institutional buyers,
            apartments & households. Www.way2foods covers a wide range of
            products/crops incl. fresh or bulk produce and branded products
            besides cut vegetables, combo packs etc.
            <br />
            <br />
            <Link
              to={"/"}
              className="text-lg font-semibold mr-2 text-green-800"
            >
              www.karnatakaagribusiness.com
            </Link>
            is a social media website for promotion of quality and cutting edge
            agri-inputs or agri tech products and agricultural crops or niche &
            quality food products. This covers emerging trend both in agri input
            or agri tech products and also in agri output sector at the national
            level and also niche products and services offered by Way2ABI.
          </div>
        </div>
        <div className="px-12 text-justify mb-4">
          <Link to={"/"} className="text-lg font-semibold mr-2 text-green-800">
            www.drsoilhealth.com
          </Link>
          is a portal by Way2Agritech for providing best quality plant nutrients
          and bio products at competitive prices to the farmers. Our major plant
          nutrients and bio products are Dr Soil health, Areca special, Phyton
          T, Bio NPK, Bio Potash, Power plus, Samrakshak and Neem products.
          <br />
          <br />
          <Link to={"/"} className="text-lg font-semibold mr-2 text-green-800">
            www.powertiller.in
          </Link>
          is a portal by Way2Agritech for providing best quality agriculture
          machineries at competitive prices to the farmer’s incl. Honda power
          products. Our flagship agri machineries included Honda products, power
          tiller, power reaper, chaff cutter, milking machine, coconut
          de-husker, agri sprayer, coconut climber, implements and tools.
          <br />
          <br />
          <Link to={"/"} className="text-lg font-semibold mr-2 text-green-800">
            www.urbanagriculture.in
          </Link>
          is an initiation by Way2Agritech for promotion of the concept “Urban
          Agriculture” also called terrace gardening and kitchen gardening. We
          focus on providing best quality products and services to the urban
          customers. Our urban agriculture major products are seeds, nursery
          plants, shade net, grow bags, coco peat, potting mix, vermi compost,
          garden nutrients, garden kits and garden tools.
          <br />
          <br />
          <Link to={"/"} className="text-lg font-semibold mr-2 text-green-800">
            www.way2vegetables.com
          </Link>
          is an initiation by Way2Foods for providing best quality vegetables
          mainly to customers in Bengaluru including households, apartments and
          HORECA segment. Our flagship vegetables are ashguard, tomato, potato,
          onion, coconut, ginger, lemon, mushroom, garlic and vegetables combo
          <br />
          <br />
          <Link to={"/"} className="text-lg font-semibold mr-2 text-green-800">
            www.way2groceries.in
          </Link>
          by Way2Foods is to provide best quality groceries mainly to customers
          in Bengaluru including households, apartments and HORECA segment. Our
          flagship groceries included rice, tur dal, sunflower oil, coffee
          powder, jaggery, spices, millets, dry fruits & nuts, food kits and
          groceries combo. “Way2ABI Agri FBI” App provides periodical price
          outlook and market insights for crops such as Coffee, Arecanut,
          Pepper, Coconut and Copra, Cashew nut, Maize, Tur, Cotton, Onion and
          Tomato. Content of this innovative and revolutionary App is based on
          extensive research and analysis covering market fundamentals,
          application of statistical tools and technical analysis.
          <br />
          <br />
          <Link to={"/"} className="text-lg font-semibold mr-2 text-green-800">
            "Way2market Agri CM"
          </Link>
          App offers best Trading Platforms, mobile revolution led and IT
          enabled, need to emerge within the system. Way2Market Agri CM App
          would connect the farm and the market. Under “Store – Availability”,
          the Customers can view list of agricultural produce and products
          available for sale and can contact the farmers and others. Under “Wish
          list – Requirements”, the Marketers can search and contact the
          Customers from the list of categories of farm produce and products.
        </div>
      </div>
    </>
  );
};

export default Service;

import React from "react";
import Carosel from "../components/Carosel";
import Intro from "../components/Intro";
import Vision from "../components/Vision";
import Collaboration from "../components/Collaboration";
import Service from "../components/Service";

const Home = () => {
  return (
    <>
      <Carosel />
      <Intro />
      <Vision />
      <Collaboration />
      <Service />
    </>
  );
};

export default Home;

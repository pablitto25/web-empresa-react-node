import React from "react";
import AddValue from "../components/AddValue/AddValue";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import RedFlag from "../components/RedFlag/RedFlag";
import WhatWeDo from "../components/WhatWeDo/WhatWeDo";
import HowWeDoIt from "../components/HowWeDoIt/HowWeDoIt";

const Home = () => {
  return (
    <>
      {/* <Header />
      <Hero /> */}
      <AddValue />
      <WhatWeDo />
      <RedFlag />
      <HowWeDoIt />
    </>
  );
};

export default Home;

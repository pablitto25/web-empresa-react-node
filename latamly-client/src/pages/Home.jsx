import React from "react";
import AddValue from "../components/AddValue/AddValue";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import RedFlag from "../components/RedFlag/RedFlag";
import WhatWeDo from "../components/WhatWeDo/WhatWeDo";
import HowWeDoIt from "../components/HowWeDoIt/HowWeDoIt";
import Brands from "../components/Brands/Brands";
/* import TeamCarousel from "../components/TeamCarousel/TeamCarousel"; */
import Contact from "../components/Contact/Contact";
import Environment from "../components/Environment/Environment";
import Footer from "../components/Footer/Footer";
import { LanguageProvider } from "../components/Context/LangContext";

const Home = () => {
  return (
    <>
      <LanguageProvider>
        <Header />
        <Hero />
        <AddValue />
        <WhatWeDo />
        <RedFlag />
        <HowWeDoIt />
        <Brands />
        {/* <TeamCarousel /> */}
        <Contact />
        <Environment />
        <Footer />
      </LanguageProvider>
    </>
  );
};

export default Home;

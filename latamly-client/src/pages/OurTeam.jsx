import React from "react";
import HeaderOurTeam from "../components/HeaderOurTeam/HeaderOutTeam";
import HeroOurTeam from "../components/HeroOurTeam/HeroOurTeam";
/* import NavbarOurTeam from "../components/NavbarOurTeam/NavbarOurTeam"; */
import CardsOurTeam from "../components/CardsOurTeam/CardsOurTeam";
import { LanguageProvider } from "../components/Context/LangContext";


const OurTeam = () => {
  return (
    <>
      <LanguageProvider>
      <HeaderOurTeam/>
      <HeroOurTeam/>
      {/* <NavbarOurTeam/> */}
      <CardsOurTeam/>
      </LanguageProvider>
    </>
  );
};

export default OurTeam;
import { useEffect, useState } from "react";

import kjvJson from "../kjv.json";
import { HeroSection } from "../Components/HeroSection";
import { HeroSection2 } from "../Components/HeroSection2";
import { Nav } from "../Components/Nav";
import { Footer } from "../Components/Footer";

function Home() {
  return (
    <>
      <Nav />
      <div className="herosection_container">
        <HeroSection />
        <HeroSection2 />
      </div>
      <Footer />
    </>
  );
}

export default Home;

import React from "react";
import AboutUs from "../components/aboutus";
import Break01 from "../components/break01";
import FourSection from "../components/four_section";
import OurMission from "../components/our_mission";
import Break03 from "../components/break03";
import OurServices from "../components/our_services";
//import SifenServices from "../components/sifenServices";

import Team from "../components/team";
import FourSection2 from "../components/four_section2";
import ImageScroller from "../components/scroll";
import SifenServices from "../components/sifenServices";

export default function Home() {
  return (
    <div>
      <Break03 />
      {/* <AboutUs />

      <Break01 /> */}
      <ImageScroller />
      
      {/* <OurServices /> */}
       {/* <SifenServices />  */}
       <SifenServices />
       <FourSection /> 
      {/* <FourSection2 /> */}
      {/* <Team /> */}
      <OurMission />
    </div>
  );
}

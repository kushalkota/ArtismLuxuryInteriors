import React from "react";
import HomePage from "../HomePage";
import HowItWorks from "../HowItWorks";
import OurProjects from "../OurProjects";
import Offer from "../Offer";
import OurPartners from "../OurPartners";

export default function Home() {
  return (
    <div>
      <HomePage />
      <HowItWorks />
      <OurProjects />
      <Offer />
      <OurPartners />;
    </div>
  );
}

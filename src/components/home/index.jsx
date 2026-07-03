import HeaderDfp from "@/src/layout/headers/header-dfp";
import React, { useEffect } from "react";
import { consumePendingSectionScroll } from "@/src/utils/scroll-to-section";
import HeroSlider from "./hero-slider";
import BusinessArea from "./business-area";
import BusinessArea2 from "./business-area-2";
import ServiceArea from "./service-area";
import DfpBrandArea from "./dfp-brand-area";
import DfpTeamArea from "./dfp-team-area";
import DfpSolutionArea from "./dfp-solution-area";
import DfpSolutionArea2 from "./dfp-solution-area-2";
import ProofArea from "./dfp-proof-area";
import DfpContactArea from "./dfp-contact-area";
import FooterTwo from "@/src/layout/footers/footer-2";

const HomeDfpCustom = () => {
  useEffect(() => {
    consumePendingSectionScroll();
  }, []);

  return (
    <>
      <HeaderDfp />
        <main>
          <HeroSlider />
          <BusinessArea />
          <BusinessArea2 />
          <DfpSolutionArea />
          <ServiceArea />
          <ProofArea />
          <DfpSolutionArea2 />
          <DfpBrandArea />
          <DfpTeamArea />
          <DfpContactArea />
        </main>
        <FooterTwo />
    </>
  );
};

export default HomeDfpCustom;

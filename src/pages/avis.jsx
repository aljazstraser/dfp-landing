import React from "react";
import Wrapper from "../layout/wrapper";
import SEO from "../common/seo";
import AvisContent from "../components/avis";

const AvisPage = () => {
  return (
    <Wrapper>
      <SEO pageTitle="Your Feedback on Drone Delivery at Rungis" />
      <AvisContent />
    </Wrapper>
  );
};

export default AvisPage;

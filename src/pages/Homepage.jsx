import React from "react";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import HeroBottomSlider from "../components/HeroBottomSlider";
import OfferTab from "../components/OfferTab";
import Featured from "../components/Featured";
import LimitedOffer from "../components/LimitedOffer";

const Homepage = () => {
  return (
    <Layout>
      <Hero />
      <HeroBottomSlider />
      <OfferTab/>
      <Featured/>
      <LimitedOffer/>
    </Layout>
  );
};

export default Homepage;

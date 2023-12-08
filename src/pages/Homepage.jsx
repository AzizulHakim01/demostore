import React from "react";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import HeroBottomSlider from "../components/HeroBottomSlider";

const Homepage = () => {
  return (
    <Layout>
      <Hero />
      <HeroBottomSlider />
    </Layout>
  );
};

export default Homepage;

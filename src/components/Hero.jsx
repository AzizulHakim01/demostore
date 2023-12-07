import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="md:bg-hero-pattern bg-hero-pattern-mb bg-center h-auto">
      <div className=" w-[1152px] mx-auto">
        <div className="md:h-[90vh] h-[100vh] w-[600px] flex flex-col gap-8 items-start justify-center">
          <h1 className="font-bold text-7xl text-zinc-800">
            Raining Offers For Hot Summer!
          </h1>
          <p className="text-3xl font-bold text-zinc-800">25% Off On All Products</p>
          <div className="flex gap-10 items-center ">
            <Link className="bg-white text-zinc-800 font-bold px-5 py-3">SHOP NOW</Link>
            <Link className="font-bold px-5 py-2 border-2 border-black">FIND MORE</Link>
          </div>
        </div>
        <div className=""></div>
      </div>
    </div>
  );
};

export default Hero;

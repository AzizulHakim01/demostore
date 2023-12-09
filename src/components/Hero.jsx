import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="md:bg-hero-pattern md:bg-fixed bg-[#d6dbdf] bg-auto bg-center h-auto w-full scroll-smooth bg-no-repeat">
      <div className=" md:w-[1152px] md:mx-auto w-full">
        <div className="md:h-[92vh] h-[100vh] md:w-[600px] flex flex-col md:gap-8 gap-10 px-4 md:px-0 md:items-start item-center justify-center">
          <h1 className="font-bold text-7xl text-zinc-800">
            Raining Offers For Hot Summer!
          </h1>
          <p className="text-3xl font-bold text-zinc-800">25% Off On All Products</p>
          <div className="flex md:gap-10 items-center md:flex-row flex-col gap-5">
            <Link className="bg-white text-zinc-800 font-bold px-5 md:py-3 py-3 text-center text-2xl">SHOP NOW</Link>
            <Link className="font-bold px-5 md:py-2 py-3 text-center text-2xl border-2 border-black">FIND MORE</Link>
          </div>
        </div>
        <div className="hidden"></div>
      </div>
    </div>
  );
};

export default Hero;

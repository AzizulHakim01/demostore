import React from "react";
import { Link } from "react-router-dom";

const LimitedOffer = () => {
  return (
    <section className="w-[1152px] bg-fixed mx-auto bg-[url('/public/images/limited.jpg')] bg-cover bg-no-repeat h-[550px]">
      <div className="bg-white bg-opacity-50">
        <div className="max-w-screen-xl px-4 py-32 md:w-[400px] sm:px-6 lg:h-screen lg:items-center lg:px-8">
          <h2 className="text-xl font-semibold text-white mb-3">Limited Time Offer</h2>
          <h1 className="text-4xl font-semibold text-white mb-4">Special Edition</h1>
          <p className="text-base font-semibold text-white mb-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
          <h2 className="text-xl font-semibold text-white mb-3">Buy This T-shirt At 20% Discount, Use Code HYDRA2023</h2>
          <Link to={"/shop"} className="uppercase bg-white w-20 py-1">
            shop now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LimitedOffer;

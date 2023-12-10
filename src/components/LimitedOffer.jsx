import React from "react";
import { Link } from "react-router-dom";

const LimitedOffer = () => {
  return (
    <section className="md:w-[1152px] text-center md:text-start bg-fixed mx-auto bg-[url('/public/images/limited.jpg')] bg-cover bg-no-repeat md:h-[550px] overflow-hidden">
      <div className="bg-black bg-opacity-30">
        <div className="max-w-screen-xl px-4 py-32 md:w-[400px] sm:px-6 lg:h-screen lg:items-center lg:px-8">
          <h2 className="text-xl font-semibold text-white mb-3">Limited Time Offer</h2>
          <h1 className="text-4xl font-semibold text-white mb-4">Special Edition</h1>
          <p className="text-base font-semibold text-white mb-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
          <h2 className="text-xl font-semibold text-white mb-3">Buy This T-shirt At 20% Discount, Use Code HYDRA2023</h2>
          <button type="button" className="px-6 py-3.5 text-base font-medium text-black bg-white hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 uppercase w-full">shop now</button>

        </div>
      </div>
    </section>
  );
};

export default LimitedOffer;

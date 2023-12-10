import React from "react";
import { Link } from "react-router-dom";

const FilterByCategories = () => {
  return (
    <div className="flex text-center flex-col gap-4">
      <h1 className='text-xl bg-[#5089AC] py-2 text-white font-bold'>Categories</h1>
      <div className="flex flex-col gap-2">
        <div className="flex justify-between">
          <p className="uppercase text-sm">Accessories</p>
          <span>(7)</span>
        </div>
        <div className="flex justify-between">
          <p className="uppercase text-sm">Men</p>
          <span>(14)</span>
        </div>
        <div className="flex justify-between">
          <p className="uppercase text-sm">Women</p>
          <span>(20)</span>
        </div>
      </div>
    </div>
  );
};

export default FilterByCategories;

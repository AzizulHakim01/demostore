import React from "react";

const QualityTab = () => {
  return (
    <div className="md:w-[1152px] mx-auto md:h-[550px] p-3 bg-[#F5F7F9]">
      <div className="grid md:grid-cols-4 grid-cols-1 md:px-4 gap-7">
        <div className="flex  items-center justify-center flex-col md:h-[550px] gap-5">
          <img src="/images/earth_44386.png" alt="" className="w-[80px]"/>
          <h1 className="text-2xl font-bold">World Wide Shipping</h1>
          <p className="text-center text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati voluptatem </p>
        </div>
        <div className="flex  items-center justify-center flex-col md:h-[550px] gap-5">
          <img src="/images/award_3172183.png" alt="" className="w-[80px]"/>
          <h1 className="text-2xl font-bold">Best Quality</h1>
          <p className="text-center text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati voluptatem </p>
        </div>
        <div className="flex  items-center justify-center flex-col md:h-[550px] gap-5">
          <img src="/images/price-tag_2977921.png" alt="" className="w-[80px]"/>
          <h1 className="text-2xl font-bold">Best Offers</h1>
          <p className="text-center text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati voluptatem </p>
        </div>
        <div className="flex items-center justify-center flex-col md:h-[550px] gap-5">
          <img src="/images/padlock_2889676.png" alt="" className="w-[80px]"/>
          <h1 className="text-2xl font-bold">Secure Payments</h1>
          <p className="text-center text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati voluptatem </p>
        </div>
      </div>
    </div>
  );
};

export default QualityTab;

import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";

const Store = () => {
  const [products, setProduct] = useState([]);
  const getAllProducts = async () => {
    const { data } = await axios.get("https://fakestoreapi.com/products");
    setProduct(data);
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  const location = useLocation();

  return (
    <div className="md:w-[90%] mx-auto">
      <div className="my-10">
        <span>home{location.pathname}</span>
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((item) => {
            return (
              <div className="flex flex-col justify-between items-center w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" key={item.id}>
                <Link to={`/single/${item.id}`}>
                  <img
                    className="p-8 rounded-t-lg h-44 hover:scale-110 transition-all"
                    src={item.image}
                    alt={item.image}
                  />
                </Link>
                <div className="px-5 pb-5 flex flex-col justify-between">
                  <Link to={`/single/${item.id}`}>
                    <h5 className="text-sm font-semibold tracking-tight text-gray-900 dark:text-white">
                      {item.title}
                    </h5>
                  </Link>
                  <div className="flex items-center mt-2.5 text-sm mb-5">
                    <p>{item.category}</p>
                  </div>
                  <div className="flex justify-center flex-col items-center gap-3 text-center" >
                    <span className="text-xl font-bold text-gray-900 dark:text-white">
                      ${item.price}
                    </span>
                    <Link
                      to={`/single/${item.id}`}
                      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 px-2 py-2"
                    >
                      Add to cart
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
          {/* More products... */}
        </div>
      </div>
    </div>
  );
};

export default Store;

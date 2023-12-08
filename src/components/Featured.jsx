import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom"

const Featured = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://fakestoreapi.com/products?limit=8"
        );
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Featured Products
        </h2>
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((item) => {
            return (
              <div className="flex flex-col justify-between items-center w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <Link href="#">
                  <img
                    className="p-8 rounded-t-lg h-80 hover:scale-110 transition-all"
                    src={item.image}
                    alt={item.image}
                  />
                </Link>
                <div className="px-5 pb-5 flex flex-col justify-between">
                  <Link href="#">
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                      {item.title}
                    </h5>
                  </Link>
                  <div className="flex items-center mt-2.5 mb-5">
                    <p>{item.category}</p>
                  </div>
                  <div className="flex justify-center items-center gap-3 text-center" >
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">
                      ${item.price}
                    </span>
                    <Link
                      href="#"
                      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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

export default Featured;

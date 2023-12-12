import React, { useEffect } from "react";
import SideBar from "./SideBar";
import Layout from "./Layout";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { selectProducts, setProducts } from "../redux/productSlice";
import { addToCart } from "../redux/cartSlice";
import axios from "axios";
import Loader from "./loader/Loader";

const Men = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);
  const location = useLocation();

  const getAllProducts = async () => {
    const { data } = await axios.get("https://fakestoreapi.com/products");
    dispatch(setProducts(data));
  };

  useEffect(() => {
    getAllProducts();
  }, [dispatch]);

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };

  
  const menProducts = products.filter((item) => item.category.toLowerCase() === "men's clothing");
  if (!products) {
    return <Loader />;
  }
  return (
    <Layout>
      
            <div className=" bg-[#F5F7F9]">
        <div className="mx-auto md:w-[1400px] grid md:grid-cols-4 gap-4 items-start justify-between">
          <div className="col-span-1 px-2 py-4 sticky top-0">
            <SideBar />
          </div>
          <div className="col-span-3 bg-white px-2 py-4 rounded-md md:mt-4 md:mb-5">
            <div className="md:w-[90%] mx-auto">
              <div className="my-10">
                <span>home{location.pathname}</span>
                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                  {menProducts.map((item) => {
                    return (
                      <div
                        className="flex flex-col justify-between items-center w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
                        key={item.id}
                      >
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
                          <div className="flex justify-center flex-col items-center gap-3 text-center">
                            <span className="text-xl font-bold text-gray-900 dark:text-white">
                              ${item.price}
                            </span>
                            <button
                              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 px-2 py-2"
                              onClick={() => handleAddToCart(item)}
                            >
                              Add to cart
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        
    </Layout>
  )
}

export default Men
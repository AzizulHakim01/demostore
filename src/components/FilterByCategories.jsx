import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { selectProducts, setProducts } from "../redux/productSlice";
import { addToCart } from "../redux/cartSlice";
import axios from "axios";

const FilterByCategories = () => {
  const dispatch = useDispatch();
  // FilterByCategories.jsx
const products = useSelector((state) => state?.product?.products || []);

  const location = useLocation();

  const getAllProducts = async () => {
    const { data } = await axios.get("https://fakestoreapi.com/products");
    dispatch(selectProducts(data));
  };

  useEffect(() => {
    getAllProducts();
  }, [dispatch]);


  
  const women_length = products.filter((item) => item.category.toLowerCase() === "women's clothing");
  const men_length = products.filter((item) => item.category.toLowerCase() === "men's clothing");
  const accessories_length = products.filter((item) => item.category.toLowerCase() === "electronics");
  if (!products) {
    return <Loader />;
  }
  const navigate = useNavigate()
  return (
    <div className="flex text-center flex-col gap-4">
      <h1 className='text-xl bg-[#5089AC] py-2 text-white font-bold'>Categories</h1>
      <div className="flex flex-col gap-2">
        <div className="flex justify-between">
          <p className="uppercase cursor-pointer text-sm" onClick={()=>navigate("/accessories")}>Accessories</p>
          <span>({accessories_length.length})</span>
        </div>
        <div className="flex justify-between">
          <p className="uppercase cursor-pointer text-sm" onClick={()=>navigate("/men")}>Men</p>
          <span>({men_length.length})</span>
        </div>
        <div className="flex justify-between">
          <p className="uppercase cursor-pointer text-sm" onClick={()=>navigate("/women")}>Women</p>
          <span>({women_length.length})</span>
        </div>
      </div>
    </div>
  );
};

export default FilterByCategories;

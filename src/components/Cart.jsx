// Cart.js
import React from "react";
import Layout from "../components/Layout";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  removeFromCart,
  updateQuantity,
  clearCart,
  selectCartItems,
} from "../redux/cartSlice";
import { Link } from "react-router-dom";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };

  const handleRemoveFromCart = (itemId) => {
    dispatch(removeFromCart(itemId));
  };

  const handleUpdateQuantity = (itemId, quantity) => {
    dispatch(updateQuantity({ itemId, quantity }));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };
  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <Layout>
      <div className="md:w-[1152px] mx-auto md:my-10">
        <h2 className="text-4xl">Shopping Cart</h2>
        {cartItems.length === 0 ? (
          <>
            <p className="text-2xl md:mt-9">Your cart is empty.</p>
            <hr className="my-4" />
            <Link
              className="bg-blue-700 py-3 px-6 font-bold text-white"
              to={"/store"}
            >
              Continue Shopping
            </Link>
          </>
        ) : (
          <div className="grid grid-cols-2 gap-5">
            <div className="md:mt-10 flex flex-col gap-5">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="border-2 flex gap-10 border-gray-400 p-4 rounded-md"
                >
                  <div className="">
                    <img src={item.image} alt="" className="w-16" />
                  </div>
                  <div className="flex flex-col gap-3">
                    <p>{item.title}</p>
                    <p>Quantity: {item.quantity}</p>
                    <p>Total: ${item.price*item.quantity}</p>
                    <div className="flex gap-3">
                      <button
                        onClick={() => handleAddToCart(item)}
                        className=" bg-green-500 px-5 font-bold py-1 text-white rounded-md"
                      >
                        Add
                      </button>
                      <button
                        onClick={() => handleRemoveFromCart(item.id)}
                        className=" bg-red-500 px-5 font-bold py-1 text-white rounded-md"
                      >
                        Remove
                      </button>
                      <input
                        type="number"
                        value={item.quantity}
                        onChange={(e) =>
                          handleUpdateQuantity(
                            item.id,
                            parseInt(e.target.value, 10)
                          )
                        }
                        className="w-10"
                      />
                    </div>
                  </div>
                </div>
              ))}
              <button onClick={handleClearCart}>Clear Cart</button>
            </div>
            <div className="md:mt-10">
                        <div className="border-2 border-gray-200 py-4 px-4 rounded-md">
                          <p>Total Price to Pay: {calculateTotalPrice()}$</p>
                        </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Cart;

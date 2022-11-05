import React from "react";
import { useSelector } from "react-redux";
import CheckoutItem from "./CheckoutItem";
// import { StateContext } from "../context/AppProvider";

const Checkout = () => {
  const { cartList } = useSelector((state) => state.cart);

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>

      {cartList.map((item) => (
        <CheckoutItem key={item.idMeal} cartItem={item} />
      ))}
    </div>
  );
};

export default Checkout;

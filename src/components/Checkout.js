import React from "react";
import { useSelector } from "react-redux";
import CheckoutItem from "./CheckoutItem";

const Checkout = () => {
  const { cartList } = useSelector((state) => state.cart);

  return (
    <div className="checkout-container">
      {cartList.length ? (
        <div className="checkout-header">
          <div className="header-block subheading">
            <span>Product</span>
          </div>
          <div className="header-block subheading">
            <span>Name</span>
          </div>
          <div className="header-block subheading">
            <span>Quantity</span>
          </div>
          <div className="header-block subheading">
            <span>Price</span>
          </div>
          <div className="header-block subheading">
            <span>Remove</span>
          </div>
        </div>
      ) : (
        <h3 className="heading-quaternary">Your cart is empty</h3>
      )}
      {cartList.map((item) => (
        <CheckoutItem key={item.idMeal} cartItem={item} />
      ))}

      {cartList.length !== 0 && (
        <span className="total heading-quinary">
          Total : $
          {cartList.reduce(
            (acc, curr) => acc + curr.idMeal.slice(3, 5) * curr.count,
            0
          )}
        </span>
      )}
    </div>
  );
};

export default Checkout;

import React from "react";
import { useDispatch } from "react-redux";
import { increment, decrement, removeItem } from "../redux/cart";
const CheckoutItem = ({ cartItem }) => {
  const { strMealThumb, strMeal, count, idMeal } = cartItem;

  const dispatch = useDispatch();
  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={strMealThumb} alt={`${strMeal}`} />
      </div>
      <span className="name">{strMeal}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => dispatch(decrement(cartItem))}>
          &#10094;
        </div>
        <span className="value"> {count}</span>
        <div className="arrow" onClick={() => dispatch(increment(cartItem))}>
          &#10095;
        </div>
      </span>
      <span className="price">{idMeal.slice(3, 5)} $</span>
      <div
        className="remove-button"
        onClick={() => dispatch(removeItem(cartItem))}
      >
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;

import React, { useContext } from "react";
import { StateContext } from "../context/AppProvider";

const Checkout = () => {
  const cartPackage = useContext(StateContext);
  console.log("Checkout==", cartPackage);
  let cartItemsAre = cartPackage.cartItems.map((item) => {
    return (
      <div key={item.idMeal}>
        <img src={item.img} alt={item.title} />
        <h6>{item.title}</h6>
        {/* {addToCartResults} */}
      </div>
    );
  });
  return (
    <div className="ckeckout">
      <h2>This is a checkout page </h2>
      {cartItemsAre}
      {/* <img src={cartPackage.cartItems[1]} alt={cartPackage.cartItems[0]} />
      <h6>{cartPackage.cartItems[0]}</h6> */}
    </div>
  );
};

export default Checkout;

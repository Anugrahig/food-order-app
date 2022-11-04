import React from "react";
import { useSelector } from "react-redux";
// import { StateContext } from "../context/AppProvider";

const Checkout = () => {
  // const cartPackage = useContext(StateContext);
  // console.log("Checkout==", cartPackage);
  const { cartList } = useSelector((state) => state.cart);
  let cartItemsAre = cartList.map((item) => {
    return (
      <div key={item.idMeal}>
        <img src={item.strMealThumb} alt={item.strMeal} />
        <h6>{item.strMeal}</h6>
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

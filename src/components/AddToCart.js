import React, { useContext } from "react";
import { StateContext } from "../context/AppProvider";

const AddToCart = ({ addToCartItem }) => {
  const cartPackage = useContext(StateContext);
  // console.log("CartItems", cartPackage);
  let cartItemsAre = cartPackage.cartItems.map((item) => {
    return (
      <div key={item.idMeal}>
        {console.log("Item ==", item)}
        <img src={item.img} alt={item.title} />
        <h6>{item.title}</h6>
        {/* {addToCartResults} */}
      </div>
    );
  });
  // let addToCartResults = addToCartItem.map((item, id) => {
  //   return (
  //     <div key={id}>
  //       <img src={item.img} alt={item.title} />
  //       <h6>{item.title}</h6>
  //     </div>
  //   );
  // });
  return (
    <div className="add-to-cart-wrapper">
      <div className="add-to-cart-item">
        <h6 className="text-center">Your Cart</h6>
        {cartItemsAre}
        {/* <img src={cartPackage.cartItems[1]} alt={cartPackage.cartItems[0]} />
        <h6>{cartPackage.cartItems[0]}</h6> */}
      </div>
    </div>
  );
};

export default AddToCart;

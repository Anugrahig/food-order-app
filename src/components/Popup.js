import React, { useContext } from "react";
import { DispatchContext, StateContext } from "../context/AppProvider";
import { AllMenuContext } from "./AllMenuContext";

const Popup = ({ closePopup, currentDish, addToCartHandler }) => {
  const allMenu = useContext(AllMenuContext);
  const dispatch = useContext(DispatchContext);
  const cartPackage = useContext(StateContext);
  console.log("cartPackage ==", cartPackage.cartItems);

  console.log("DispatchContext", dispatch);
  let dishDetails = allMenu
    .filter((menuItem) => currentDish === menuItem.strMeal)
    .map((item) => {
      return (
        <div key={item.idMeal} className="popup-content-inner">
          {console.log("Item from PopUp", item)}
          <div className="popup-header">
            <img src={item.strMealThumb} alt={item.strMeal} />
            <h5 className="popup-header-category heading-senary">
              {item.strCategory}
            </h5>
            <h5 className="popup-header-category-price heading-senary">
              {item.idMeal.slice(3, 5)} $
            </h5>
          </div>
          <h2 className="heading-quaternary">{item.strMeal}</h2>
          <p className="item-instruction">{item.strInstructions}</p>
          <ul className="dish-ingredients flex ">
            <li>{item.strIngredient1}</li>
            <li>{item.strIngredient2}</li>
            <li>{item.strIngredient3}</li>
            <li>{item.strIngredient4}</li>
          </ul>
          {/* onClick={() => addToCartHandler(item.strMealThumb, item.strMeal)} */}
          <button
            onClick={() =>
              dispatch({
                type: "add_to_cart",
                payload: {
                  id: item.idMeal,
                  title: item.strMeal,
                  img: item.strMealThumb,
                },
              })
            }
          >
            Order Now
          </button>
          <h5 className="popup-close" onClick={closePopup}>
            Close
          </h5>
        </div>
      );
    });
  return (
    <div className="popup">
      {console.log("fullMenu", allMenu)}
      <div className="popup-content">{dishDetails}</div>
    </div>
  );
};

export default Popup;

import React, { useContext } from "react";
import { useDispatch } from "react-redux";
import { AllMenuContext } from "./AllMenuContext";
import { addToCart } from "../redux/cart";
const Popup = ({ closePopup, currentDish, onClose }) => {
  const allMenu = useContext(AllMenuContext);

  const dispatch = useDispatch();

  let dishDetails = allMenu
    .filter((menuItem) => currentDish === menuItem.strMeal)
    .map((item) => {
      return (
        <div key={item.idMeal}>
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

          <button onClick={() => dispatch(addToCart(item))}>Order Now</button>
          <h5 className="popup-close" onClick={closePopup}>
            Close
          </h5>
        </div>
      );
    });
  return (
    <div className="popup" onClick={onClose}>
      <div
        className="popup-content"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        {dishDetails}
      </div>
    </div>
  );
};

export default Popup;

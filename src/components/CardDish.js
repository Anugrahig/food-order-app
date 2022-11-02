import React from "react";

const CardDish = (props) => {
  return (
    <div
      className="special-dishes-list-click"
      key={props.menuItem.idMeal}
      onClick={() => {
        props.showPopup(props.menuItem.strMeal);
      }}
    >
      <div className="special-dish-list-container">
        <img
          className="br-10"
          src={props.menuItem.strMealThumb}
          alt={props.menuItem.strMeal}
        />
        <h5 className="heading-senary">{props.menuItem.strMeal}</h5>
      </div>
    </div>
  );
};

export default CardDish;

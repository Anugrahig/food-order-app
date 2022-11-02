import { useContext, useState } from "react";
import CardDish from "./CardDish";
import { AllMenuContext } from "./AllMenuContext";
import Popup from "./Popup";
import AddToCart from "./AddToCart";

const SpecialDishes = () => {
  const allMenus = useContext(AllMenuContext);
  const [showPopup, setShowPopup] = useState(false);
  const [currentDish, setCurrentDish] = useState("");
  const [addToCartItem, setAddToCartItem] = useState([]);
  // console.log("All menus", allMenus);
  // console.log(props.specialMenu);
  let maxSpecialDishes = 8;
  // let specialMenus = props.specialMenu.map((menu, index) => {
  //   if (index < maxSpecialDishes) {
  //     return (
  //       <li>
  //         <img className="br-10" src={menu.strMealThumb} alt={menu.strMeal} />
  //         <h4>{menu.strMeal}</h4>
  //       </li>
  //     );
  //   }
  // });
  // Let's shows the Popup menu
  const showPopupHandler = (dishName) => {
    setShowPopup(true);
    setCurrentDish(dishName);
  };
  const closePopupHandler = () => {
    setShowPopup(false);
  };
  const addToCartHandler = (addToCartId, addToCartImg, addToCartTitle) => {
    // console.log("Add to Cart Now...", addToCartImg, addToCartTitle);
    setAddToCartItem([
      ...addToCartItem,
      {
        id: addToCartId,
        img: addToCartImg,
        title: addToCartTitle,
      },
    ]);
  };
  // console.log("Type of", typeof addToCartItem);
  // console.log("Add to cart", addToCartItem);

  return (
    <section className="section-special-dishes">
      {showPopup && (
        <Popup
          closePopup={closePopupHandler}
          currentDish={currentDish}
          addToCartHandler={addToCartHandler}
        />
      )}
      <div className="container">
        <AddToCart addToCartItem={addToCartItem} />
        <div className="special-dishes-content text-center ">
          <h3 className="heading-tertiary">Our Special Dishes</h3>
          <p className="special-dish-para">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            vitae qui minus ut, consequatur accusantium sed inventore sequi
            beatae dolores alias neque nobis voluptas pariatur?
          </p>
        </div>
        <div className="  special-dishes-list container grid grid--4-cols margin-bottom-md ">
          {allMenus
            .filter((menu, id) => id < maxSpecialDishes)
            .map((menu) => {
              return (
                <CardDish
                  menuItem={menu}
                  key={menu.idMeal}
                  showPopup={showPopupHandler}
                />
              );
            })}
        </div>
      </div>
    </section>
  );
};
export default SpecialDishes;

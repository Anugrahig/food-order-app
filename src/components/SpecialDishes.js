import { useContext, useState } from "react";
import CardDish from "./CardDish";
import { AllMenuContext } from "./AllMenuContext";
import Popup from "./Popup";
// import { StateContext } from "../context/AppProvider";

const SpecialDishes = () => {
  const allMenus = useContext(AllMenuContext);
  const [showPopup, setShowPopup] = useState(false);
  const [currentDish, setCurrentDish] = useState("");

  let maxSpecialDishes = 8;

  const showPopupHandler = (dishName) => {
    setShowPopup(true);
    setCurrentDish(dishName);
  };
  const closePopupHandler = () => {
    setShowPopup(false);
  };

  return (
    <section className="section-special-dishes">
      {showPopup && (
        <Popup
          closePopup={closePopupHandler}
          currentDish={currentDish}
          onClose={() => setShowPopup(false)}
        />
      )}
      <div className="container">
        <div className="special-dishes-content text-center ">
          <h3 className="heading-tertiary">Our Special Dishes</h3>
          <p className="special-dish-para">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            vitae qui minus ut, consequatur accusantium sed inventore sequi
            beatae dolores alias neque nobis voluptas pariatur?
          </p>
        </div>
        <div className="special-dishes-list container grid grid--4-cols margin-bottom-md">
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

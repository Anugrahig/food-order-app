/* eslint-disable eqeqeq */
import React, { useContext, useEffect, useState } from "react";
import CardDish from "./CardDish";
import { AllMenuContext } from "./AllMenuContext";
import Pagination from "./Pagination";
import Popup from "./Popup";

const FilteredDishes = (props) => {
  const allMenu = useContext(AllMenuContext);
  const [filteredDishes, setFilteredDishes] = useState([]);
  const [activeDish, setActiveDish] = useState("Beef");

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(4);
  const [menuCategory, setMenuCategory] = useState([]);
  const [singleDish, setSingleDish] = useState([]);

  const [showPopup, setShowPopup] = useState(false);
  const [currentDish, setCurrentDish] = useState("");
  // const [addToCartItem, setAddToCartItem] = useState([]);
  let indexOfLastDish = currentPage * itemsPerPage;

  let indexOfFirstDish = indexOfLastDish - itemsPerPage;

  let showDishesNow = filteredDishes.slice(indexOfFirstDish, indexOfLastDish);
  // let maxItem = 4;

  // Get all the categories
  const getAllCategories = async () => {
    const API_URL = "https://www.themealdb.com/api/json/v1/1/categories.php";
    let response = await fetch(API_URL);
    let categoryData = await response.json();
    setMenuCategory(categoryData.categories);
  };

  const getDefaultDish = async () => {
    const API_URL = "https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef";
    let response = await fetch(API_URL);
    let singleDishData = await response.json();
    setSingleDish(singleDishData.meals);
  };

  useEffect(() => {
    getAllCategories();
    getDefaultDish();
  }, []);

  const showPopupHandler = (dishName) => {
    setShowPopup(true);
    setCurrentDish(dishName);
  };
  const closePopupHandler = () => {
    setShowPopup(false);
  };

  let singleDishItems = singleDish
    .filter((menu, id) => menu.strMeal.startsWith("C"))
    .map((menu, id) => {
      return (
        id < 4 && (
          <CardDish
            menuItem={menu}
            key={menu.idMeal}
            showPopup={showPopupHandler}
          />
        )
      );
    });
  const showFilteredDishesHandler = (category) => {
    // Lets display singleDish
    setSingleDish([]);
    let filteredDishesAre = allMenu
      .filter((menu) => {
        return menu.strCategory === category;
      })
      .map((menu) => {
        return (
          <CardDish
            menuItem={menu}
            key={menu.idMeal}
            showPopup={showPopupHandler}
          />
        );
      });

    setFilteredDishes(filteredDishesAre);

    setActiveDish(category);
  };

  return (
    <section className="filtered-dishes-section">
      {showPopup && (
        <Popup
          closePopup={closePopupHandler}
          currentDish={currentDish}
          onClose={() => setShowPopup(false)}
        />
      )}
      <div>
        <div className="container">
          <div className="text-center">
            <h3 className="heading-tertiary">Chooes your Dishes</h3>
            <p className="special-dish-para">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam
              natus corporis voluptatum quis est veniam sapiente doloribus dicta
              odit fugiat?
            </p>
          </div>
          <div className="filtered-dishes-category">
            {menuCategory.map((item, id) => {
              return (
                <div key={id} className="filtered-dishes-category-list">
                  <div
                    className={item.strCategory === activeDish ? "active" : ""}
                    onClick={() => {
                      showFilteredDishesHandler(item.strCategory);
                    }}
                  >
                    {item.strCategory}
                  </div>
                </div>
              );
            })}
          </div>
          <div className="special-dishes-list container grid grid--4-cols margin-bottom-md">
            {/* <div className="filtered-dishes-item-list container"> */}
            {singleDishItems}

            {singleDishItems != 0 || filteredDishes.length !== 0 ? (
              showDishesNow
            ) : (
              <div className="alert">
                <h3 className="heading-quaternary margin-left">
                  Sorry, no items found
                </h3>
                <h4 className="heading-quinary margin-left">
                  Please try another Dishes
                </h4>
              </div>
            )}
            {/* </div> */}
          </div>

          <Pagination
            filteredDishes={filteredDishes}
            itemsPerPage={itemsPerPage}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </div>
    </section>
  );
};

export default FilteredDishes;

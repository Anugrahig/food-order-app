import { createContext, useEffect, useState } from "react";
import Loader from "./Loader";

export const AllMenuContext = createContext();
export const AllMenus = (props) => {
  const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState(true);
  const getAllMenus = async () => {
    const API_URL = "https://www.themealdb.com/api/json/v1/1/search.php?f=c";
    let response = await fetch(API_URL);
    let data = await response.json();
    setMenu(data.meals);
    setLoading(false);
    // console.log(data);
  };
  useEffect(() => {
    getAllMenus();
  }, []);

  return (
    <AllMenuContext.Provider value={menu}>
      {!loading ? props.children : <Loader />}
    </AllMenuContext.Provider>
  );
};

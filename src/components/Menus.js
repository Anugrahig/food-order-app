import FilteredDishes from "./FilteredDishes";
import Header from "./Header";
import Hero from "./Hero";

import SpecialDishes from "./SpecialDishes";
import { AllMenus } from "./AllMenuContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./Checkout";

const Menus = () => {
  return (
    <div>
      <Router>
        <Header />
        <Hero />
        <Routes>
          {/* Page 1 */}
          <Route
            path="/"
            element={
              <AllMenus>
                <SpecialDishes />
                <FilteredDishes />
              </AllMenus>
            }
          />

          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </Router>
    </div>
  );
};
export default Menus;

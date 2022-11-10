import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo/Group-10.png";
import BagIcon from "../assets/icons/bag.svg";
import { useSelector } from "react-redux";
import { useState } from "react";

const Header = () => {
  const { cartList } = useSelector((state) => state.cart);
  const [fix, setFix] = useState(false);
  const StickyNavbar = () => {
    if (window.scrollY >= 700) {
      setFix(true);
    } else {
      setFix(false);
    }
  };
  window.addEventListener("scroll", StickyNavbar);
  return (
    <header className={fix ? "header fixed" : "header"}>
      <Link to="/">
        <img src={Logo} alt="Omnifood logo" className="logo" />
      </Link>
      <nav className="main-nav">
        <ul className="main-nav-list">
          <li></li>

          <Link to="/checkout" className="cart-icon-container">
            <img src={BagIcon} alt="logo" className="main-nav-list logo" />
            <span className="cart-count">{cartList.length}</span>
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

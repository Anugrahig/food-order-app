import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo/Group-10.png";
import BagIcon from "../assets/icons/bag.svg";

const Header = () => {
  return (
    <header className="header">
      <Link to="/">
        <img src={Logo} alt="Omnifood logo" className="logo" />
      </Link>
      <nav className="main-nav">
        <ul className="main-nav-list">
          <li>
            
          </li>

          <Link to="/checkout">
            <img src={BagIcon} alt="logo" className="main-nav-list logo" />
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Header;


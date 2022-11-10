import React from "react";
import {
  IoLogoInstagram,
  IoLogoFacebook,
  IoLogoTwitter,
} from "react-icons/io5";
import { Link } from "react-router-dom";
import Logo from "../assets/logo/Group-10.png";
import { ExternalLink } from "react-external-link";

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container logo-container ">
        <ul className="social-links">
          <li>
            <ExternalLink
              href="https://www.instagram.com/"
              className="footer-link"
            >
              <IoLogoInstagram className="social-icon footer-link" />
            </ExternalLink>
          </li>
          <li>
            <ExternalLink
              href="https://www.facebook.com/"
              className="footer-link"
            >
              <IoLogoFacebook className="social-icon" />
            </ExternalLink>
          </li>
          <li>
            <ExternalLink className="footer-link" href="https://twitter.com/">
              <IoLogoTwitter className="social-icon" />
            </ExternalLink>
          </li>
        </ul>
        <Link to="/">
          <img className="logo-company" src={Logo} alt="foodly logo" />
        </Link>
        <p className="copyright footer-text">
          Copyright &copy; <span className="year"> {date} </span> by Foodly,
          Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

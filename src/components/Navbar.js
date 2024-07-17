import "./NavbarStyles.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";

import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrolly >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  return (
    <div className={color ? "header header-bg" : "header"}>
      <Link to="/">
        <h1>SHAAN</h1>
      </Link>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li>
          <Link to="/about">
            <h3>आमचे ध्येय</h3>
          </Link>
        </li>
        <li>
          <Link to="/products">
            <h3>शेतीचे औजारे</h3>
          </Link>
        </li>
        <li>
          <Link to="/contact">
            <h3>संपर्क साधा</h3>
          </Link>
        </li>
      </ul>
      <div className="social-media" onClick={handleClick}>
        {click ? (
          <FaTimes size={20} style={{ color: "#fff" }} />
        ) : (
          <FaBars size={20} style={{ color: "#fff" }} />
        )}
      </div>
    </div>
  );
};

export default Navbar;

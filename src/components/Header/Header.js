import React from "react";
import { Link } from "react-router-dom";

import "./Header.scss";

const Header = () => {
  return (
    <div id="header">
      <div id="link">
        <Link to="/add">
          <img src="./img/add.svg" alt="add icon" /> ADD TO FRIDGE
        </Link>
      </div>
    </div>
  );
};

export default Header;

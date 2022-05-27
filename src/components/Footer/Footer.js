import React from "react";
import { Link } from "react-router-dom";

import "./Footer.css";

const Footer = () => {
  return (
    <div id="footer">
      <div id="link">
        <Link to="/fridge">
          <img id="fridge" src="./img/fridge.svg" alt="fridge icon" />
          FRIDGE CONTENTS
        </Link>
      </div>
      <div id="link">
        <Link to="/recipes">
          <img id="recipes" src="./img/recipes.svg" alt="recipes icon" />
          RECIPES
        </Link>
      </div>
    </div>
  );
};

export default Footer;

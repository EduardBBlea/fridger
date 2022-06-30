import React from "react";

import "./RecipeCard.scss";

const RecipeCard = ({ recipe }) => {
  console.log(recipe);
  return (
    <div id="recipe-card">
      <div id="recipe-img-container">
        <img alt="recipe" src={recipe.images.SMALL.url} />
      </div>
      <div id="recipe-text-container">
        <h1>{recipe.label}</h1>
        <div id="recipe-text-info">
          <div className="recipe-text">
            <h4>Calories</h4>
            <p>{Math.floor(recipe.calories)}</p>
          </div>
          <div className="recipe-text">
            <h4>Portions</h4>
            <p>{recipe.yield}</p>
          </div>
          <div className="recipe-text">
            <h4>Ingredients</h4>
            <p>{recipe.ingredients.length}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;

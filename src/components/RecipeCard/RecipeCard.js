import React from "react";

import "./RecipeCard.scss";

const RecipeCard = ({ recipe }) => {
  console.log(recipe);
  return (
    <div id="recipe-card">
      <div id="recipe-image">
        <img src={recipe.images.THUMBNAIL.url} />
      </div>
      <div id="recipe-title">{recipe.label}</div>
      <div id="recipe-ingredients">
        <ul>
          {recipe.ingredients.map((ingredient) => (
            <li>{ingredient.food}</li>
          ))}
        </ul>
      </div>
      <div id="recipe-calories">Calories per portion</div>
    </div>
  );
};

export default RecipeCard;

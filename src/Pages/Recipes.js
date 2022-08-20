import React, { useEffect, useState } from "react";

import fetchRecipes from "../api/getRecipes";

import useFetch from "../hooks/useFetch";

import { useGlobalContext } from "../contexts/GlobalContext";

import RecipeCard from "../components/RecipeCard/RecipeCard";

const Recipes = () => {
  const { items, expiringItems } = useGlobalContext();

  const { load, response, error, isLoading } = useFetch({
    fetchFn: (items) => fetchRecipes(items),
    immediate: false,
  });

  const [recipes, setRecipes] = useState(null);

  useEffect(() => {
    let itemsToExpireSoon = "";
    expiringItems.forEach((item) => {
      itemsToExpireSoon += `${item.item.toLowerCase()} `;
    });
    load(itemsToExpireSoon);
  }, [items, expiringItems]);

  useEffect(() => {
    if (response) {
      setRecipes(response);
    }
  }, [response]);

  if (items.length === 0) {
    return (
      <h2 className="empty-fridge-text">There's no items in your fridge!</h2>
    );
  }

  if (error) {
    return <h1>There is a network error.</h1>;
  }

  if (isLoading || recipes === null) {
    return <h1>The data is loading...</h1>;
  }

  return (
    <div>
      <h2>
        It seems you have {expiringItems.length} items going off soon, care to
        try them on these recipes?{" "}
      </h2>
      <div id="recipe-cards-container">
        {recipes.hits.map((item) => (
          <RecipeCard recipe={item.recipe} key={recipes.hits.indexOf(item)} />
        ))}
      </div>
    </div>
  );
};

export default Recipes;

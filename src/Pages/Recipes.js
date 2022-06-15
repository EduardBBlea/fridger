import React, { useEffect, useState } from "react";

import fetchRecipes from "../api/getRecipes";

import useFetch from "../hooks/useFetch";

import { useGlobalContext } from "../contexts/GlobalContext";

const Recipes = () => {
  const { items, daysLeft } = useGlobalContext();

  const { load, response, error, isLoading } = useFetch({
    fetchFn: (items) => fetchRecipes(items),
    immediate: false,
  });

  const [recipes, setRecipes] = useState(null);

  useEffect(() => {
    const itemsToExpireSoon = [];

    items.forEach((item) => {
      if (daysLeft(item.expiry) <= 2) {
        itemsToExpireSoon.push(item.item.toLowerCase());
      }
    });

    load(itemsToExpireSoon);
  }, []);

  useEffect(() => {
    if (response) {
      setRecipes(response);
    }
  }, [response]);

  if (error) {
    return <h1>There is a network error.</h1>;
  }

  if (isLoading || recipes === null) {
    return <h1>The data is loading...</h1>;
  }
  console.log(recipes);
  return (
    <div>
      {recipes.hits.map((item) => {
        return <h1> {item.recipe.label}</h1>;
      })}
    </div>
  );
};

export default Recipes;

import React, { useEffect, useState } from "react";

import fetchRecipes from "../api/getRecipes";

import useFetch from "../hooks/useFetch";

import { useGlobalContext } from "../contexts/GlobalContext";

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
  }, [expiringItems]);

  useEffect(() => {
    if (response) {
      setRecipes(response);
    }
  }, [response]);

  if (items.length === 0) {
    return <h1>No items in the fridge</h1>;
  }

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
        return <h1>w </h1>;
      })}
    </div>
  );
};

export default Recipes;

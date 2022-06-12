import React, { useEffect, useState } from "react";

import fetchRecipes from "../api/getRecipes";

import useFetch from "../hooks/useFetch";

import { useGlobalContext } from "../contexts/GlobalContext";

const Recipes = () => {
  const { items } = useGlobalContext();

  const { load, response, error, isLoading } = useFetch({
    fetchFn: () => fetchRecipes(),
    immediate: false,
  });

  const [recipes, setRecipes] = useState(null);

  useEffect(() => {
    load();
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
  return <div>recipes</div>;
};

export default Recipes;

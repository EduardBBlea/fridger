import { RECIPE_SEARCH_API, APP_ID, APP_KEY } from "./config";

const fetchRecipes = () => {
  return fetch(`${RECIPE_SEARCH_API + APP_ID + APP_KEY}`).then((response) => {
    return response.json();
  });
};

export default fetchRecipes;

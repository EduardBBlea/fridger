import { RECIPE_SEARCH_URL, APP_ID, APP_KEY } from "./config";

const fetchRecipes = (items = "") => {
  if (items.length > 0) {
    let searchUrl = new URL(RECIPE_SEARCH_URL);
    searchUrl.searchParams.append("q", items);

    return fetch(searchUrl + APP_ID + APP_KEY).then((response) => {
      return response.json();
    });
  }
  return fetch(RECIPE_SEARCH_URL + APP_ID + APP_KEY).then((response) => {
    return response.json();
  });
};

export default fetchRecipes;

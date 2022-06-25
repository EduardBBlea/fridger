import { RECIPE_SEARCH_URL, APP_ID, APP_KEY } from "./config";

const fetchRecipes = (items = "") => {
  console.log(items);
  if (items.length > 0) {
    let Url = new URL(RECIPE_SEARCH_URL);
    Url.searchParams.append("q", items);
    return fetch(Url + APP_ID + APP_KEY).then((response) => {
      return response.json();
    });
  }
  return fetch(RECIPE_SEARCH_URL + APP_ID + APP_KEY).then((response) => {
    return response.json();
  });
};

export default fetchRecipes;

import { RECIPE_SEARCH_API, APP_ID, APP_KEY } from "./config";

const fetchRecipes = (items = []) => {
  console.log("items from call", items);
  let itemsNamesString = "";
  items.forEach((itemName) => {
    itemsNamesString += `&q=${itemName}&`;
  });
  return fetch(
    `${RECIPE_SEARCH_API + itemsNamesString + APP_ID + APP_KEY}`
  ).then((response) => {
    return response.json();
  });
};

export default fetchRecipes;

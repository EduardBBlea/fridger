import { useEffect, useState } from "react";

const useGlobalState = () => {
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("items")) || []
  );

  const addItem = (item) => {
    setItems([...items, item]);
  };

  const getItem = (id) => {
    return items.find((item) => {
      return item.id === parseInt(id);
    });
  };

  const hasItem = (id) => {
    return getItem(id) !== undefined;
  };

  const modItem = (id, property, value) => {
    const item = getItem(id);
    item[property] = value;
    setItems([...items]);
  };

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  return {
    items,
    addItem,
    getItem,
    hasItem,
    modItem,
  };
};

export default useGlobalState;

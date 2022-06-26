import { useEffect, useState } from "react";

const useGlobalState = () => {
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("items")) || []
  );

  const daysLeft = (expiry) => {
    let actualDate = new Date();
    let expiryDate = new Date(expiry);
    return Math.ceil(
      (expiryDate.getTime() - actualDate.getTime()) / (1000 * 3600 * 24)
    );
  };

  const [expiringItems, setExpiringItems] = useState(
    items.filter((item) => {
      return daysLeft(item.expiry) <= 2;
    })
  );

  const addItem = (item) => {
    setItems([...items, item]);
  };

  const removeItem = (id) => {
    setItems(
      items.filter((item) => {
        return item.id !== id;
      })
    );
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

  const generateId = () =>
    String(Date.now().toString(32) + Math.random().toString(16)).replace(
      /\./g,
      ""
    );

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  return {
    items,
    expiringItems,
    addItem,
    getItem,
    hasItem,
    modItem,
    removeItem,
    generateId,
    daysLeft,
  };
};

export default useGlobalState;

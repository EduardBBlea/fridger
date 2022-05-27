import React from "react";
import { useGlobalContext } from "../contexts/GlobalContext";

const Fridge = () => {
  const { items, hasItem, getItem, addItem, modItem } = useGlobalContext();

  return (
    <div>
      {items.map((item) => (
        <h2 key={item.id}>{item.item}</h2>
      ))}
    </div>
  );
};

export default Fridge;

import React from "react";
import ItemCard from "../components/ItemCard/ItemCard";
import { useGlobalContext } from "../contexts/GlobalContext";

const Fridge = () => {
  const { items } = useGlobalContext();

  return (
    <div className="cards">
      {items.map((item) => (
        <ItemCard
          item={item.item}
          id={item.id}
          key={item.id}
          category={item.category}
          expiry={item.expiry}
        />
      ))}
    </div>
  );
};

export default Fridge;

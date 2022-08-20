import React from "react";
import ItemCard from "../components/ItemCard/ItemCard";
import { useGlobalContext } from "../contexts/GlobalContext";

const Fridge = () => {
  const { items } = useGlobalContext();

  return (
    <div id="cards">
      {items.length > 0 ? (
        items.map((item) => (
          <ItemCard
            item={item.item}
            id={item.id}
            key={item.id}
            category={item.category}
            expiry={item.expiry}
          />
        ))
      ) : (
        <h2 className="empty-fridge-text">There's no items in your fridge!</h2>
      )}
    </div>
  );
};

export default Fridge;

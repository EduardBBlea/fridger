import React from "react";
import { useGlobalContext } from "../../contexts/GlobalContext";

import "./ItemCard.scss";

const ItemCard = ({ id, item, category, expiry }) => {
  const { removeItem, daysLeft } = useGlobalContext();

  const handleRemoveItem = () => {
    if (window.confirm(`Delete ${item} ?`)) removeItem(id);
  };

  return (
    <div className="card">
      <div className="item-info">
        <button onClick={handleRemoveItem}>X</button>
        <h4>{item}</h4>
        <p>Category: {category}</p>
        <p>
          Expiry in:
          <span style={{ color: daysLeft(expiry) <= 2 ? "red" : "black" }}>
            {" "}
            {daysLeft(expiry)}
          </span>{" "}
          days
        </p>
      </div>
      <img src={`./img/${category}.jpg`} alt="category" />
    </div>
  );
};

export default ItemCard;

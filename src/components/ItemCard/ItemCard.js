import React from "react";
import { useGlobalContext } from "../../contexts/GlobalContext";

import "./ItemCard.scss";

const ItemCard = ({ id, item, category, expiry }) => {
  const { getItem, removeItem } = useGlobalContext();

  const daysLeft = (expiry) => {
    let actualDate = new Date();
    let expiryDate = new Date(expiry);
    return Math.ceil(
      (expiryDate.getTime() - actualDate.getTime()) / (1000 * 3600 * 24)
    );
  };

  const handleRemoveItem = () => {
    if (window.confirm(`Delete ${item} ?`)) removeItem(id);
  };

  return (
    <div className="card">
      <div className="item-info">
        <button onClick={handleRemoveItem}>x</button>
        <h4>{item}</h4>
        <p>Category: {category}</p>
        <p>Expiry date: {daysLeft(expiry)}</p>
        <p>{id}</p>
      </div>
      <img src={`./img/${category}.jpg`} alt="category image" />
    </div>
  );
};

export default ItemCard;

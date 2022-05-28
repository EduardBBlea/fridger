import React from "react";

import "./ItemCard.css";

const ItemCard = ({ item, category, expiry }) => {
  return (
    <div className="card">
      <div className="container">
        <h4>{item}</h4>
        <p>Category:{category}</p>
        <p>Expiry date: {expiry}</p>
      </div>
    </div>
  );
};

export default ItemCard;

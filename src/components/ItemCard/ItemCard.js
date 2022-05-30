import React from "react";

import "./ItemCard.scss";

const ItemCard = ({ item, category, expiry }) => {
  const daysLeft = (expiry) => {
    let actualDate = new Date();
    let expiryDate = new Date(expiry);
    return Math.ceil(
      (expiryDate.getTime() - actualDate.getTime()) / (1000 * 3600 * 24)
    );
  };

  return (
    <div className="card">
      <div className="item-info">
        <h4>{item}</h4>
        <p>Category: {category}</p>
        <p>Expiry date: {daysLeft(expiry)}</p>{" "}
      </div>
      <img src={"./img/" + category + ".jpg"} alt="category image" />
    </div>
  );
};

export default ItemCard;

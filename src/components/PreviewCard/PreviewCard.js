import React from "react";

import "./PreviewCard.scss";

const PreviewCard = ({ item, category, expiry }) => {
  return (
    <div id="item-preview-card">
      <p>
        Item Name: <span>{item}</span>
      </p>
      <div id="category-group">
        <p>
          Category: <span>{category}</span>
        </p>
        {category && <img src={`./img/${category}.jpg`} />}
      </div>

      <p>
        Expiry: <span>{expiry}</span>
      </p>
    </div>
  );
};

export default PreviewCard;

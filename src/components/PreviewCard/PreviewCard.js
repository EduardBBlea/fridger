import React from "react";

import "./PreviewCard.scss";

const PreviewCard = ({ item, category, expiry }) => {
  return (
    <div id="item-preview-card">
      <div id="info-group">
        <p>
          Item Name: <span>{item}</span>
        </p>
        <p>
          Category: <span>{category}</span>
        </p>
        <p>
          Expiry: <span>{expiry}</span>
        </p>
      </div>
      <div id="preview-card-img">
        {category && <img src={`./img/${category}.jpg`} />}
      </div>
    </div>
  );
};

export default PreviewCard;

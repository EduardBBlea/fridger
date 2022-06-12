import React, { useState } from "react";

import { useGlobalContext } from "../contexts/GlobalContext";

import PreviewCard from "../components/PreviewCard/PreviewCard";

const Add = () => {
  const { addItem, generateId } = useGlobalContext();

  const [formData, setFormData] = useState({
    id: generateId(),
    item: "",
    category: "",
    expiry: "",
  });

  const onChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    addItem(formData);
    setFormData({ id: generateId(), item: "", category: "", expiry: "" });
  };

  return (
    <div id="add-form">
      <h1>Add a new item to the fridge:</h1>
      <div id="form-item-preview">
        <div id="form">
          <form onSubmit={onSubmit}>
            <div>
              <label htmlFor="item">
                <p>Item name:</p>
                <input
                  value={formData.item}
                  type="text"
                  name="item"
                  required
                  onChange={onChange}
                />
              </label>
            </div>
            <div>
              <label htmlFor="category">
                <p>Category:</p>
                <select
                  value={formData.category}
                  name="category"
                  required
                  onChange={onChange}
                >
                  <option value=""></option>
                  <option value="dairy">Eggs & dairy</option>
                  <option value="fruits">Fruits </option>
                  <option value="baking">Nuts & baking</option>
                  <option value="herbs">Herbs & spices</option>
                  <option value="meats">Meat & fish</option>
                  <option value="others">Others</option>
                  <option value="pulses">Pasta, rice, pulses</option>
                  <option value="vegetables">Vegetables</option>
                </select>
              </label>
            </div>
            <div>
              <label htmlFor="expiry">
                <p>Expiry Date:</p>
                <input
                  value={formData.expiry}
                  type="date"
                  name="expiry"
                  required
                  onChange={onChange}
                />
              </label>
            </div>

            <input id="add-button" type="submit" value="Add" />
          </form>
        </div>
        <div id="item-preview">
          <p>Adding fridge item:</p>
          <PreviewCard
            item={formData.item}
            category={formData.category}
            expiry={formData.expiry}
          />
        </div>
      </div>
    </div>
  );
};

export default Add;

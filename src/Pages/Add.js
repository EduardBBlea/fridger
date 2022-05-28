import React, { useState } from "react";

import { useGlobalContext } from "../contexts/GlobalContext";

const Add = () => {
  const { addItem } = useGlobalContext();

  const [formData, setFormData] = useState({});

  const handleChange = (event) => {
    setFormData({
      ...formData,
      id: Math.random(),
      [event.target.name]: event.target.value.trim(),
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addItem(formData);
  };

  return (
    <div id="add-form">
      <h1>Add a new item to the fridge:</h1>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <label htmlFor="item">
            <p>Item:</p>
            <input
              type="text"
              name="item"
              id="item"
              required
              onChange={handleChange}
            />
          </label>
          <label htmlFor="category">
            <p>Category:</p>
            <select
              name="category"
              id="category"
              required
              onChange={handleChange}
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
          <label htmlFor="expiry">
            <p>Expiry Date:</p>
            <input
              type="date"
              name="expiry"
              id="expiry"
              required
              onChange={handleChange}
            />
          </label>
        </fieldset>

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Add;

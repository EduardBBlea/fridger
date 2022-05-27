import React from "react";

const Add = () => {
  return (
    <div id="add-form">
      <form action="#">
        <label for="item">
          <p>Item:</p>
          <input type="text" name="item" id="item" required />
        </label>
        <label for="category">
          <p>Category:</p>
          <select name="category" id="category" required>
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

        <label for="expiry">
          <p>Expiry Date:</p>
          <input type="date" name="expiry" id="expiry" required />
        </label>

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Add;

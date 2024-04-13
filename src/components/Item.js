import { useState } from "react";

const Item = ({ items, onRemoveItem, onToggleItem }) => {
  return (
    <ul>
      {items.map((item, i) => (
        <li key={item.id}>
          <input
            id={`item-${i}`}
            type="checkbox"
            className="item"
            value={item.packed}
            onChange={() => {
              onToggleItem(item.id);
            }}
          />
          <label
            htmlFor={`item-${i}`}
            style={item.packed ? { textDecoration: "line-through" } : {}}
          >
            {item.quantity} {item.description}
          </label>
          <button onClick={() => onRemoveItem(item.id)}>❌</button>
        </li>
      ))}
    </ul>
  );
};

export default Item;

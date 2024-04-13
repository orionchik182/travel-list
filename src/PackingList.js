import Item from "./Item";
import React, { useState } from "react";

const PackingList = ({
  onRemoveItem,
  onToggleItem,
  onClearItems,
  onSortItems,
}) => {
  const [sortBy, setSortBy] = useState("input");

  return (
    <div className="list">
      <Item
        items={onSortItems(sortBy)}
        onRemoveItem={onRemoveItem}
        onToggleItem={onToggleItem}
      />
      <div className="actions">
        <select
          value={sortBy}
          onChange={(e) => {
            setSortBy(e.target.value);
          }}
        >
          <option value="input">sort by input order</option>
          <option value="description">sort by description</option>
          <option value="packed">sort by packed status</option>
        </select>
        <button onClick={onClearItems}>CLEAR LIST</button>
      </div>
    </div>
  );
};

export default PackingList;

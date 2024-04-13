import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";
import { useState } from "react";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
];

const App = () => {
  const [items, setItems] = useState(initialItems);

  const handleAddItems = (item) => {
    setItems((items) => [...items, item]);
  };

  const handleRemoveItem = (id) => {
    setItems((items) => items.filter((element) => element.id !== id));
  };

  const handleToggleItem = (id) => {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };

  const handleClearItems = () => {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items?"
    );
    if (confirmed) setItems([]);
  };

  const handleSortItems = (sortBy) => {
    switch (sortBy) {
      case "input":
        return items;
      case "description":
        const sort = items.slice().sort((a, b) => {
          return a.description.localeCompare(b.description);
        });
        return sort;
      case "packed":
        const filterPacked = items.filter((item) => item.packed);
        return filterPacked;
      default:
        return items;
    }
  };

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onRemoveItem={handleRemoveItem}
        onToggleItem={handleToggleItem}
        onClearItems={handleClearItems}
        onSortItems={handleSortItems}
      />
      <Stats items={items} />
    </div>
  );
};

export default App;

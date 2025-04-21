import React, { useState } from "react";
import "./App.css";

function App() {
  const [items, setItems] = useState(["iphone", "mac", "samsung"]);
  const [newItem, setNewItem] = useState("");

  const addItem = () => {
    if (newItem.trim() !== "") {
      setItems([...items, newItem]);
      setNewItem("");
    }
  };

  const deleteItem = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  const editItem = (index) => {
    const updatedItem = prompt("أدخل النص الجديد للعنصر:", items[index]);
    if (updatedItem && updatedItem.trim() !== "") {
      setItems(items.map((item, i) => (i === index ? updatedItem : item)));
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      addItem();
    }
  };

  return (
    <div className="app-container">
      <h1 className="app-title">array</h1>
      <div className="input-container">
        <input
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          onKeyPress={handleKeyPress}
          className="input-field"
          placeholder=" enter new items"
        />
        <button onClick={addItem} className="add-button">
          add
        </button>
      </div>
      <ul className="items-list">
        {items.map((item, index) => (
          <li key={index} className="item">
            <span>{item}</span>
            <button onClick={() => deleteItem(index)} className="delete-button">
              delete
            </button>
            <button onClick={() => editItem(index)} className="edit-button">
              edit
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

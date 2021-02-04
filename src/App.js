import React, { useState } from "react";
import "./App.css";
import Listitem from "./Listitem/Listitem.js";

function App() {
  const [state, setState] = useState({
    items: [],
    currentItem: { text: "", key: "" },
  });

  const addItem = (e) => {
    e.preventDefault();
    const newItem = state.currentItem.text;
    if (newItem != "") {
      setState({
        items: [...state.items, newItem],
        currentItem: {
          text: "",
          key: "",
        },
      });
    }
  };

  const handleInput = (e) => {
    setState({
      items: [...state.items],
      currentItem: { text: e.target.value, key: Date.now() },
    });
  };

  return (
    <div className="App">
      <form onSubmit={addItem}>
        <input type="text" onChange={handleInput} />
        <button type="submit">Add</button>
      </form>
      <Listitem items={state.items} />
    </div>
  );
}

export default App;

import React, { useState } from "react";
import "./App.css";
// import Person from './Person/person.js'
import Person2 from "./Person2/Person2.js";

function App() {
  const [state, setState] = useState({
    items: [],
    currentItem: { text: "", key: "" },
  });

  return (
    <form onSubmit={addItem}>
      <input type="text" onChange={handleInput} />
      <button type="submit"></button>
    </form>
  );
}

export default App;

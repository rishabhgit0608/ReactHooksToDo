import React, { useState } from "react";

const Person2 = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>{count}</p>

      <button
        className="upcounter"
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment
      </button>

      <button
        className="Downcounter"
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Decerement
      </button>
    </div>
  );
};

export default Person2;

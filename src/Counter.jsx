import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <button className="btn" onClick={() => setCount(count - 1)}>
        -
      </button>
      <span>{count}</span>
      <button className="btn" onClick={() => setCount(count + 1)}>
        +
      </button>
    </>
  );
};

export default Counter;

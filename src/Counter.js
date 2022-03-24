import React, { useState } from "react";

const Counter = ({ name, count, setCount }) => {
  const [vote, setVote] = useState(0);

  const handleIncrement = () => {
    setVote(vote + 1);
    setCount(count + 1);
  };
  const handleDecrement = () => {
    if (vote > 0) {
      setVote(vote - 1);
      setCount(count - 1);
    }
  };
  return (
    <div style={{ margin: "15px", padding: "15px", backgroundColor: "grey" }}>
      <h3>
        {name} votes: {vote}
      </h3>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
    </div>
  );
};
export default Counter;

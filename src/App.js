import "./styles.css";
import Counter from "./Counter";
import React, { useState } from "react";

const employees = [
  {
    id: 1,
    name: "Fang-Wen"
  },
  {
    id: 2,
    name: "Hsi-Wen"
  },
  {
    id: 3,
    name: "Pohan"
  },
  {
    id: 4,
    name: "Emily"
  }
];
export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>Total votes: {count}</h1>
      {employees.map((e) => (
        <Counter key={e.id} name={e.name} count={count} setCount={setCount} />
      ))}
    </div>
  );
}

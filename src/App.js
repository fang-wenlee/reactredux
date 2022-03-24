import "./styles.css";
import Counter from "./Counter";
import React from "react";
import { useSelector } from "react-redux";
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
  const count = useSelector((state) => state.counter.count);

  return (
    <div className="App">
      <h1>Total votes: {count}</h1>
      {employees.map((e) => (
        <Counter key={e.id} name={e.name} />
      ))}
    </div>
  );
}

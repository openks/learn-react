import React from "react";
import "./styles.css";
import Hello from "./components/Hello.jsx";
import Clock from "./components/Clock.jsx";

const dog = {
  name: "大黄",
  age: 3,
  gender: "熊"
};

export default function App() {
  return (
    <div>
      <Hello {...dog} />
      <Clock />
    </div>
  );
}

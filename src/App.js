import React, { useState } from "react";
import Navbar from "./components/Navbar";

function App() {
  const [boool, setBoool] = useState(true)
  const name = "yes"
  return (
    <div className="App">
      {boool ? name : "not true"}
      <div
      onClick={() => setBoool(!boool)}>
        <h1>changeBool </h1>
      </div>
      <Navbar></Navbar>
    </div>
  );
}

export default App;

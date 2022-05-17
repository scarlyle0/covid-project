//import React, { useState } from "react";
import Navbar from "./components/Navbar";

function App() {

  return (
    <div className="App">
      Hello my name is 
      <i style = {{fontSize: '10rem', color: 'blue' }}
      className="fa-solid fa-arrows-down-to-people"></i>
      <Navbar/>
    </div>
  );
}

export default App;

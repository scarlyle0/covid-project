import React, { useState } from "react";
import Navbar from "./components/Navbar";
import './index.css'
import Main from "./components/Main";
import Dropdown from "./components/Dropdown";

function App() {
  const[selected, setSelected] = useState('Global')
  const[open, setOpen] = useState(false)

  return (
    <div className="App">
      
      <Navbar selected = {selected} setSelected = {setSelected}
      open = {open} setOpen={setOpen}/>
      <main className="Main">
        {open ?
        <Dropdown/> :
        <Main/>
        }
      </main>
    </div>
  );
}

export default App;

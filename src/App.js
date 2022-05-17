import React, { useState } from "react";
import Navbar from "./components/Navbar";
import './index.css'
import Main from "./components/Main";
import Dropdown from "./components/Dropdown";
import useFetchData from "./hooks/fetchData";

function App() {
  const[selected, setSelected] = useState('Global')
  const[open, setOpen] = useState(false)

  const countriesUrl = 'https://covid19.mathdro.id/api/countries'
  const {data, loading, error} = useFetchData(countriesUrl)

  console.log(data)
  return (
    <div className="App">
      
      <Navbar selected = {selected} open = {open} setOpen={setOpen} 
      loading = {loading} error = {error}/>
      {!loading && <main className="Main">
        {open ?
        <Dropdown data = {data} setSelected = {setSelected}/> :
        <Main/>
        }
      </main>}
    </div>
  );
}

export default App;

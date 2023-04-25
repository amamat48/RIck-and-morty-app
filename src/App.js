import './App.css';
import { useState, useEffect } from "react"
import { Route, Routes } from "react-router-dom"
import axios from "axios"
import Home from "./pages/Home"
import Locations from "./pages/Locations"
import Characters from "./pages/Characters"
import Episodes from './pages/Episodes';
import Nav from "./components/Nav"

function App() {

  const [charList, setCharList] = useState([])
  const [locations, setLocations] = useState({})
  const [episodes, setEpisodes] = useState({})

  async function getAllCharacters() {
    const response = await fetch("https://rickandmortyapi.com/api/character")
    const data = response.json()
    setCharList(data.results)
  }

  //



  async function getAllLocations() {
    const response = await fetch("https://rickandmortyapi.com/api/location")
    const data = response.json()
    console.log(response.json())
    setLocations(data.results)
  }





  async function getAllEpisodes() {
    const response = await fetch("https://rickandmortyapi.com/api/episode")
    const data = response.json()
    setEpisodes(data)
  }

  useEffect(() => {

    getAllCharacters()
    getAllLocations()
    getAllEpisodes()

  },[])

  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/locations" element={<Locations locations = {locations}/>}/>
        <Route path="/characters" element={<Characters characters={charList}/>}/>
        <Route path="/episodes" element={<Episodes episodes={episodes}/>}/>
      </Routes>
    </div>
  );
}

export default App;

//https://rickandmortyapi.com/api/character  // character api

// Call to api

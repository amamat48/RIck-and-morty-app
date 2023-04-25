import './App.css';
import { useState, useEffect } from "react"
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Locations from "./pages/Locations"
import Characters from "./pages/Characters"
import Episodes from './pages/Episodes';
import Nav from "./components/Nav"

function App() {

  const [charList, setCharList] = useState(null)
  const [locations, setLocations] = useState(null)
  const [episodes, setEpisodes] = useState(null)

  async function getAllCharacters() {
    const response = await fetch("https://rickandmortyapi.com/api/character")
    const data = await response.json()
    return data.results
  }






  async function getAllLocations() {
    const response = await fetch("https://rickandmortyapi.com/api/location")
    const data = await response.json()
    return data.results
  }





  async function getAllEpisodes() {
    const response = await fetch("https://rickandmortyapi.com/api/episode")
    const data = await response.json()
    return data.results
  }

  useEffect(() => {
    async function fetchData() {
      const charData = await getAllCharacters()
      const locationData = await getAllLocations()
      const episodeData = await getAllEpisodes()
      setCharList(charData)
      setLocations(locationData)
      setEpisodes(episodeData)
    }
    fetchData()

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

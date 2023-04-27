import './App.css';
import { useState, useEffect } from "react"
import { Route, Routes } from "react-router-dom"
import { getAllCharacters, getAllEpisodes, getAllLocations} from "./services/get-info"
import Home from "./pages/Home"
import Locations from "./pages/Locations"
import Characters from "./pages/Characters"
import Episodes from './pages/Episodes';
import Nav from "./components/Nav"
import SingleCharacter from "./pages/SingleCharacter"
import SingleLocation from './pages/SingleLocation';
import Search from './pages/Search';

function App() {

  const [charList, setCharList] = useState(null)
  const [locations, setLocations] = useState(null)
  const [episodes, setEpisodes] = useState(null)
  const [page, setPage] = useState(1)
  const [locationPage, setLocationPage] = useState(1)



  useEffect(() => {
    async function fetchData() {
      const locationData = await getAllLocations()
      const episodeData = await getAllEpisodes()
      setLocations(locationData)
      setEpisodes(episodeData)
    }
    fetchData()

  },[])

  useEffect(() => {
    async function setCharPage() {
    const charData = await getAllCharacters(page)
    setCharList(charData)
    }
    setCharPage()
  }, [page])

  useEffect(() => {
    async function setLocPage() {
    const locData = await getAllLocations(locationPage)
    setLocations(locData)
    }
    setLocPage()
  }, [locationPage])

  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home locations={locations} characters={charList} episodes={episodes}/>}/>
        <Route path="/locations" element={<Locations locations = {locations} page={locationPage} setPage={setLocationPage}/>}/>
        <Route path="/characters" element={<Characters characters={charList} page={page} setPage={setPage}/>}/>
        <Route path="/episodes" element={<Episodes episodes={episodes}/>}/>
        <Route path="/singleCharacter/:id" element={<SingleCharacter characters={charList}/>} />
        <Route path="/singleLocation/:id" element={<SingleLocation locations = {locations}/>}/>
        <Route path="/search" element={<Search />}/>
      </Routes>
    </div>
  );
}

export default App;

//https://rickandmortyapi.com/api/character  // character api

// Call to api

import React from 'react'
import { useState } from 'react'
import { getCharacterByName, getEpisodeByName, getLocationByName } from '../services/get-info'
import Characters from './Characters'
import Locations from './Locations'
import Episodes from './Episodes'
import NotFound from '../components/NotFound'

export default function Search() {

    const [inputValue, setInputValue] = useState('')
    const [characters, setCharacters] = useState(null)
    const [locations, setLocations] = useState(null)
    const [episodes, setEpisodes] = useState(null)

    const handleChange = (event) => {
        setInputValue(event.target.value)
    }

    const handleSubmit = async (event) => {
        event.preventDefault()

        const filteredCharata = await getCharacterByName(inputValue)
        const filteredLocationData = await getLocationByName(inputValue)
        const filteredEpisodeData = await getEpisodeByName(inputValue)

        setCharacters(filteredCharata)
        setLocations(filteredLocationData)
        setEpisodes(filteredEpisodeData)
    }


    return (
        <>
            <div className='searchContainer'>
                <form onSubmit={handleSubmit}>
                    <h1>Search for a Rick and Morty Characcter, episode, or location!</h1>
                    <input className='searchInput' type="text" value={inputValue} onChange={handleChange} />
                    <button className="submitButton" type='submit'>Search</button>
                </form>
            </div>

            <div className="results">
                {characters && <Characters characters={characters} />}
                {!characters && locations && <Locations locations={locations} />}
                {!characters && !locations && episodes && <Episodes episodes={episodes} />}
                {!characters && !locations && !episodes && <NotFound />}
            </div>
        </>
    )
}

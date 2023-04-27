import React from 'react'
import { useState } from 'react'
import { getCharacterByName } from '../services/get-info'
import Characters from './Characters'

export default function Search() {

    const [inputValue, setInputValue] = useState('')
    const [characters, setCharacters] = useState(null)

    const handleChange = (event) => {
        setInputValue(event.target.value)
    }

    const handleSubmit = async (event) => {
        event.preventDefault()

        const data = await getCharacterByName(inputValue)
        setCharacters(data)
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <p>Search for a Rick and Morty Characcter:</p>
                <input type="text" value={inputValue} onChange={handleChange} />
                <button type='submit'>Search</button>
            </form>
            <Characters characters={characters} />
        </div>
    )
}

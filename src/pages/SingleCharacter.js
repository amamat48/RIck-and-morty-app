import React from 'react'
import { useParams } from "react-router-dom"
import { useEffect, useState } from 'react'
import { getSingleCharcter } from '../services/get-info'

export default function SingleCharacter(props) {
  let { id } = useParams()
  let newId = parseInt(id)
  newId += 1

  const [character, setCharacter] = useState(null)

  useEffect(() => {
    async function fetchCharacter() {
      const data = await getSingleCharcter(newId)
      setCharacter(data)
      console.log(data)
    }
    fetchCharacter()
  }, [])

  // const character = props.characters.find((character) => character.id === id)
  return (
    <>
      {character ? <div className='singleCharacterBox'>
        <img className="singleCharacterImg" src={character.image} alt={character.name} />
        <h1>Name: {character.name}</h1>
        <p className='boxText'>Status: {character.status}</p>
        <p className='boxText'>Species: {character.species}</p>
        <p className='boxText'>Gender: {character.gender}</p>
        <p className='boxText'>Origin: {character.origin.name}</p>
        <p className='boxText'>Location: {character.location.name}</p>
        <p className='boxText'>Date Create: {character.created}</p>
      </div> : <div>loading</div>}
    </>
  )
}

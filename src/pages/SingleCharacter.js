import React from 'react'
import { useParams } from "react-router-dom"
import { useEffect, useState } from 'react'
import { getSingleCharcter } from '../services/get-info'
import { Link } from "react-router-dom"


export default function SingleCharacter(props) {
  let { id } = useParams()
  let newId = parseInt(id)


  const [character, setCharacter] = useState(null)
  const [originUrlId, setOriginUrlId] = useState(null)
  const [locationUrlId, setLocationUrlId] = useState(null)

  useEffect(() => {
    async function fetchCharacter() {
      const data = await getSingleCharcter(newId)
      setCharacter(data)
      console.log(data.origin.url)

      let originUrl = data.origin.url
      let newOriginUrl = originUrl.split("/")
      let locationUrl = data.location.url
      let newLocationUrl = locationUrl.split("/")

      setOriginUrlId(parseInt(newOriginUrl[newOriginUrl.length - 1]))
      setLocationUrlId(parseInt(newLocationUrl[newLocationUrl.length - 1]))
      console.log('yes')
    }
    fetchCharacter()

  }, [])

  return (
    <>
      {character ? <div className='singleCharacterBox'>
        <img className="singleCharacterImg" src={character.image} alt={character.name} />
        <h1>Name: {character.name}</h1>
        <p className='boxText'>Status: {character.status}</p>
        <p className='boxText'>Species: {character.species}</p>
        <p className='boxText'>Gender: {character.gender}</p>
        {originUrlId ? <Link className='boxText' to={`/singleLocation/${originUrlId}`}>Origin: {character.origin.name}</Link> : <p className="boxText">Origin: {character.origin.name}</p>}
        <br/>
        <br/>
        {locationUrlId ? <Link className='boxText' to={`/singleLocation/${locationUrlId}`}>Location: {character.location.name}</Link> : <p className="boxText">Location: {character.location.name}</p>}
        <p className='boxText'>Date Create: {character.created}</p>
      </div> : <div>loading</div>}
    </>
  )
}

// <a className='boxText' href={character.origin.url}>Origin: {character.origin.name}</a>
import React from 'react'
import CharacterCard from '../components/CharacterCard'
import { Link } from "react-router-dom"
export default function Characters({ characters, page, setPage }) {

  const nextPage = () => {
    setPage(page + 1)
  }

  const prevPage = () => {
    setPage(page - 1)
  }



  return (
    <div>
      <p>Click on a card to view more information *buuuuuuuuuuuuurp*</p>
        {characters? characters.map((character, id) => {
            return(
                <Link to={`/singleCharacter/${id}`}>
                    <CharacterCard props={character}/>

                </Link>
            )
        }) : <div>loading...</div>}
        {page < 42? <button onClick={nextPage}>Next Page</button> : <></>}

        {page > 1?<button onClick={prevPage}> Previous Page</button> : <></>}
    </div>
  )
}

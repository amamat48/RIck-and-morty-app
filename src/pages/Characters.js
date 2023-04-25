import React from 'react'
import CharacterCard from '../components/CharacterCard'
export default function Characters({ characters }) {

  return (
    <div>
        {characters? characters.map((character, id) => {
            return(
                <div key={id}>
                    <CharacterCard props={characters}/>

                </div>
            )
        }) : <div>loading...</div>}
    </div>
  )
}

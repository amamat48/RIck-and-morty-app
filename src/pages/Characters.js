import React from 'react'

export default function Characters({ characters }) {

    if (!characters) {
        return <div>Loading...</div>;
      }

  return (
    <div>
        {characters.map((character) => {
            return(
                <div className="character">
                    <h1>{character.name}</h1>

                </div>
            )
        })}
    </div>
  )
}

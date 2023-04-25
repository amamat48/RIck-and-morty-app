import React from 'react'

export default function CharacterCard({ props }) {
    return (
        <div className="characterContainer">
            {props.map((character) => {
                return (
                    <div className="card" key={character.id}>
                        <div className="cardBody">
                            <h2 className="name">{character.name}</h2>
                            <img src={character.image} alt={character.name}/>
                            <p>Status: {character.status}</p>
                            <p>Species: {character.species}</p>
                            <p>Gender: {character.gender}</p>

                        </div>

                    </div>
                )

        })}
        </div>
    )
}

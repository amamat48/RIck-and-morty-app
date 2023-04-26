import React from 'react'

export default function CharacterCard({ props }) {
    return (
        <div>
            <div className="characterCard" key={props.id}>
                <div className="characterCardBody">
                    <h2 className="name">{props.name}</h2>
                    <img src={props.image} alt={props.name} />
                    <p>Status: {props.status}</p>
                    <p>Species: {props.species}</p>
                    <p>Gender: {props.gender}</p>
                </div>

            </div>

        </div>
    )
}

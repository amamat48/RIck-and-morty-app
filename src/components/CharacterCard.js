import React from 'react'

export default function CharacterCard({ props }) {
    return (
        <div className='characterContainer'>
            <div className="characterCard" key={props.id}>
                <div className="characterCardBody">
                    <h2 className="name">{props.name}</h2>
                    <img src={props.image} alt={props.name} />
                    <p className='boxText'>Status: {props.status}</p>
                    <p className='boxText'>Species: {props.species}</p>
                    <p className='boxText'>Gender: {props.gender}</p>
                </div>

            </div>
        </div>


    )
}

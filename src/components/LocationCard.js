import React from 'react'

export default function LocationCard({ props }) {
    return (
        <div>
            <div className="characterCard" key={props.id}>
                <div className="characterCardBody">
                    <h1 className="name">{props.name}</h1>
                    <p className='boxText'>Type: {props.type}</p>
                    <p className='boxText'>Dimension: {props.dimension}</p>
                    <p className='boxText'>Gender: {props.gender}</p>
                </div>

            </div>

        </div>
    )
}

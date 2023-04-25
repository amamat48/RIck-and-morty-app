import React from 'react'

export default function LocationCard({ props }) {
    return (
        <div className="characterContainer">
            {props.map((location) => {
                return (
                    <div className="card" key={location.id}>
                        <div className="cardBody">
                            <h2 className="name">{location.name}</h2>
                            <p>Type: {location.type}</p>
                            <p>Dimension: {location.dimension}</p>

                        </div>

                    </div>
                )

        })}
        </div>
    )
}

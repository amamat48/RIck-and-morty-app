import React from 'react'

export default function EpisodeCard({ props }) {
    return (
        <div className="characterContainer">
            {props.map((episode) => {
                return (
                    <div className="card" key={episode.id}>
                        <div className="cardBody">
                            <h2 className="name">{episode.name}</h2>
                            <p>Type: {episode.air_date}</p>
                            <p>Dimension: {episode.dimension}</p>

                        </div>

                    </div>
                )

        })}
        </div>
    )
}


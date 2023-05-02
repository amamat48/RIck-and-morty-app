import React from 'react'

export default function EpisodeCard({ props }) {
    return (
        <div className="episodeContainer">
            {props.map((episode) => {
                return (
                    <div className="card" key={episode.id}>
                        <div className="cardBody">
                            <h2 className="name">{episode.name}</h2>
                            <p>Air Date: {episode.air_date}</p>

                        </div>

                    </div>
                )

        })}
        </div>
    )
}


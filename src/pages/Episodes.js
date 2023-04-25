import React from 'react'
import EpisodeCard from '../components/EpisodeCard'

export default function Episodes({ episodes }) {
    return (
        <div>
            {episodes? episodes.map((episode, id) => {
                return(
                    <div key={id}>
                        <EpisodeCard props={episodes}/>

                    </div>
                )
            }) : <div>loading...</div>}
        </div>
      )
}

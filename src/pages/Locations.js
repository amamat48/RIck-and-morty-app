import React from 'react'
import LocationCard from '../components/LocationCard'
export default function Locations({ locations }) {
  return (
    <div>
        {locations? locations.map((location, id) => {
            return(
                <div key={id}>
                    <LocationCard props={locations}/>

                </div>
            )
        }) : <div>loading...</div>}
    </div>
  )
}

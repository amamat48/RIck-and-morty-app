import React from 'react'
import { Link } from 'react-router-dom'
import LocationCard from '../components/LocationCard'

export default function Locations({ locations }) {
  return (
    <div>
        {locations ? locations.map((location, id) => {
        return (
          <Link to={`/singleLocation/${id}`}>
            <LocationCard props={location} />

          </Link>
        )
      }) : <div>loading...</div>}
    </div>
  )
}

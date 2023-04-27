import React from 'react'
import { Link } from 'react-router-dom'
import LocationCard from '../components/LocationCard'

export default function Locations({ locations, page, setPage }) {

  const nextPage = () => {
    setPage(page + 1)
  }

  const prevPage = () => {
    setPage(page - 1)
  }

  return (
    <div>
      <h2 id='information'>Click on a card to view more information *buuuuuuuuuuuuurp*</h2>
        {locations ? locations.map((location, id) => {
        return (
          <Link to={`/singleLocation/${location.id}`}>
            <LocationCard props={location} />

          </Link>
        )
      }) : <div>loading...</div>}
      <div className='buttonContainer'>
        {page < 7 ? <button onClick={nextPage}>Next Page</button> : <></>}

        {page > 1 ? <button onClick={prevPage}> Previous Page</button> : <></>}
      </div>
    </div>
  )
}

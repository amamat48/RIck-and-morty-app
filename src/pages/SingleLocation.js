import { useParams } from 'react-router-dom'
import { useState, useEffect } from "react"
import { getSingleLocation } from '../services/get-info'

export default function SingleLocation(props) {
    let { id } = useParams()
    let newId = parseInt(id)
    newId += 1

    const [location, setLocation] = useState(null)

    useEffect(() => {
        async function fetchLocation() {
            const data = await getSingleLocation(newId)
            setLocation(data)
        }
        fetchLocation()
    }, [])

    console.log(location)

    return (
        <>
            {location ? <div className='singleLocationBox'>
                <h1 id='locationName'>Name: {location.name}</h1>
                <p className='boxText'>Dimension: {location.dimension}</p>
                <p className='boxText'>Type: {location.type}</p>
                <p className='boxText'>Date Created: {location.created}</p>
            </div> : <div>loading</div>}
        </>

    )
}

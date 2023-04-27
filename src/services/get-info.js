export async function getAllCharacters(pageNum) {
    const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${pageNum}`)
    const data = await response.json()
    return data.results
  }

export  async function getAllLocations(pageNum) {
    const response = await fetch(`https://rickandmortyapi.com/api/location?page=${pageNum}`)
    const data = await response.json()
    return data.results
  }

export async function getSingleLocation(id) {
  const response = await fetch(`https://rickandmortyapi.com/api/location/${id}`)
  const data = await response.json()
  return data
}


export async function getSingleCharcter(id) {
        const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
        const data = await response.json()
        return data
    }


export async function getAllEpisodes() {
    const response = await fetch("https://rickandmortyapi.com/api/episode")
    const data = await response.json()
    return data.results
  }

export async function getCharacterByName(inputValue) {
  const response = await fetch(`https://rickandmortyapi.com/api/character/?name=${inputValue}`)
  const data = await response.json()
  return data.results
}

export async function getLocationByName(inputValue) {
  const response = await fetch(`https://rickandmortyapi.com/api/location/?name=${inputValue}`)
  const data = await response.json()
  return data.results
}

export async function getEpisodeByName(inputValue) {
  const response = await fetch(`https://rickandmortyapi.com/api/episode/?name=${inputValue}`)
  const data = await response.json()
  return data.results
}
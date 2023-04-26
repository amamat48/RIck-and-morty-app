export async function getAllCharacters(pageNum) {
    const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${pageNum}`)
    const data = await response.json()
    return data.results
  }

export  async function getAllLocations() {
    const response = await fetch("https://rickandmortyapi.com/api/location")
    const data = await response.json()
    return data.results
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
import Characters from "./Characters"
import Locations from "./Locations"
import Episodes from "./Episodes"

export default function Home({ characters, episodes, locations }) {
  console.log(characters)
  return (
    <div>
      <h1 id="introText">Hey there random guy *burps* welcome to my website. Here *burps* you can search for the characters, *burps* episodes, and *burps* locations that interest you and get details about them *buuuuuuurps* Do whatever, I don't care</h1>
      <h1>Characters</h1>
      <Characters characters={characters}/>
      <h1>Episodes</h1>
      <Episodes episodes={episodes}/>
      <h1>Locations</h1>
      <Locations locations={locations}/>
    </div>
  )
}

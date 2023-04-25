import { Link } from "react-router-dom"

export default function Nav() {
  return (
    <div className="nav">
      <Link to="/">
          <div>Home</div>
      </Link>

      <Link to="/characters">
          <div>Characters</div>
      </Link>

      <Link to="/locations">
          <div>Locations</div>
      </Link>

      <Link to="/episodes">
        <div>Episodes</div>
      </Link>


    </div>
  )
}

import NavLinks from '../NavLinks/NavLinks'
import MyMovies from '../MyMovies/MyMovies'
import './Header.css'

function Header() {
  return (
    <header>
      <h1>MovieDB</h1>

      <div className="nav-container">
        <NavLinks />
        <MyMovies />
      </div>

    </header>
  )
}

export default Header;

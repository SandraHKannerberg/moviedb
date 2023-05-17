import NavLinks from '../NavLinks/NavLinks'
import MyMovies from '../MyMovies/MyMovies'

function Header() {
  return (
    <header>
      <h1>MovieDB</h1>

      <div className="header-container">
        <NavLinks />
        <MyMovies />
      </div>
    </header>
  )
}

export default Header;

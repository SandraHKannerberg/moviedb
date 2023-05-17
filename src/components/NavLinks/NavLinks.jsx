import { Link } from 'react-router-dom'


function NavLinks() {
  return (
    <ul>
      <li><Link to="/movies">Movies</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/contact">Contact</Link></li>
    </ul>
  )
}

export default NavLinks;


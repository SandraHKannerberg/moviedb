import MovieList from '../MovieList/MovieList';
import MovieDetails from '../MovieDetails/MovieDetails';
import About from '../About/About';
import Contact from '../Contact/Contact';
import {Routes, Route } from 'react-router-dom'



function Main () {
  return (
    <div>
      <Routes>
        <Route path='/' element={<MovieList />} />
        <Route path='/' element={<MovieDetails />} />
        <Route path='/' element={<About />} />
        <Route path='/' element={<Contact />} />
      </Routes>
    </div>
  );
}

export default Main;
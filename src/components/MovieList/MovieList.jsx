import FilterDropdown from '../FilterDropDown/FilterDropDown';
import MovieCard from '../MovieCard/MovieCard';


function MovieList() {
  return (
    <div>
      <h1>MovieList</h1>
      <FilterDropdown/>
      <MovieCard/>
    </div>
  );
}

export default MovieList;

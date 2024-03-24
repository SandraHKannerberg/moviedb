import FilterDropDown from "../FilterDropDown/FilterDropDown";
import MovieCard from "../MovieCard/MovieCard";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Col from "react-bootstrap/Col";
import "./MovieList.css";

function MovieList() {
  const [movies, setMovies] = useState([]);

  const [filterParams, setFilterParams] = useSearchParams({
    filter: "popular",
  });

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${filterParams.get(
        "filter"
      )}?api_key=${import.meta.env.VITE_API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => setMovies(data.results));
  }, [filterParams]);

  return (
    <div className="movie_list">
      <div className="movie_list_filter">
        <Col
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "0.5rem",
          }}
        >
          <i className="fa-solid fa-filter"></i>
          <span> Filter</span>
        </Col>
        <FilterDropDown
          filter={filterParams.get("filter")}
          setFilter={setFilterParams}
        />
      </div>
      <h2>
        {filterParams.get("filter") != "top_rated"
          ? filterParams.get("filter") + " Movies"
          : "Top Rated Movies"}
      </h2>
      <div className="movie_grid">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default MovieList;

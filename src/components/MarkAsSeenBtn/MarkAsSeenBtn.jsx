import Button from "react-bootstrap/Button";
import { useState, useEffect } from "react";

function MarkAsSeenBtn({ movie }) {
  const initialMovies = JSON.parse(localStorage.getItem("myMovies")) || [];
  const initialIsMovieSeen =
    JSON.parse(localStorage.getItem(`isMovieSeen_${movie.id}`)) || false;

  // My movielist
  const [myMovies, setMyMovies] = useState(initialMovies);

  // Boolean if a movie is mark as seen
  const [isMovieSeen, setIsMovieSeen] = useState(initialIsMovieSeen);

  const markMovieAsSeen = () => {
    const currentMovie = {
      image: movie.poster_path,
      title: movie.title,
      id: movie.id,
    };

    // Check if currentMovie already exists in myMovies
    if (!myMovies.some((movie) => movie.id === currentMovie.id)) {
      // If no - add movie
      setMyMovies([...myMovies, currentMovie]);
      setIsMovieSeen(true);
      localStorage.setItem(
        "isMovieSeen_" + currentMovie.id,
        JSON.stringify(true)
      );
    } else {
      // If yes - don't add it again
      console.log(`${currentMovie.title} finns redan i listan.`);
    }
  };

  useEffect(() => {
    localStorage.setItem("myMovies", JSON.stringify(myMovies));
  }, [myMovies]);

  return (
    <Button
      variant="outlined"
      color="inherit"
      onClick={markMovieAsSeen}
      disabled={isMovieSeen}
      style={{
        backgroundImage: "linear-gradient(to bottom right, #FDC639, #FF7C60",
        border: 0,
        cursor: "pointer",
      }}
    >
      {isMovieSeen ? "Seen It" : "Add"}
    </Button>
  );
}

export default MarkAsSeenBtn;

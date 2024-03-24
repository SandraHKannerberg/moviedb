import Button from "react-bootstrap/Button";
import { useContext, useState, useEffect } from "react";
import { MovieContext } from "../../context/MovieContext";

function MarkAsSeenBtn({ movie }) {
  const [isSeen, setIsSeen] = useState(false);
  const { addToSeenMovies, movieItems } = useContext(MovieContext);

  useEffect(() => {
    const isAlreadyInList = movieItems.some((item) => item.id === movie.id);
    setIsSeen(isAlreadyInList);
  }, [movieItems, movie.id]);

  return isSeen ? null : (
    <Button
      variant="outlined"
      color="inherit"
      onClick={() => addToSeenMovies(movie)}
      style={{
        backgroundImage: "linear-gradient(to bottom right, #FDC639, #FF7C60",
        border: 0,
        cursor: "pointer",
      }}
    >
      Add
    </Button>
  );
}

export default MarkAsSeenBtn;

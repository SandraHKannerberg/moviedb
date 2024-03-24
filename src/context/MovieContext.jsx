// MovieContext.js
import { createContext, useState, useEffect } from "react";

const MovieContext = createContext();

const MovieProvider = ({ children }) => {
  const [movieItems, setMovieItems] = useState(
    localStorage.getItem("movieItems")
      ? JSON.parse(localStorage.getItem("movieItems"))
      : []
  );

  // Movie Quantity
  const seenMoviesTotalQuantity = movieItems.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  );

  // Add movie to seen movies
  const addToSeenMovies = (item) => {
    const isMovieSeen = movieItems.find(
      (movieItem) => movieItem.id === item.id
    );

    if (isMovieSeen) {
      console.log("Finns redan i listan");
      window.alert(`You already seen ${item.title}.`); // Make it a better alert
    } else {
      setMovieItems([...movieItems, { ...item, quantity: 1 }]);
    }
  };

  // Remove from seen movies
  const removeFromSeenMovies = (item) => {
    const isMovieSeen = movieItems.find(
      (movieItem) => movieItem.id === item.id
    );

    if (isMovieSeen) {
      setMovieItems(movieItems.filter((movieItem) => movieItem.id !== item.id));
    } else {
      setMovieItems(
        movieItems.map((movieItem) =>
          movieItem.id === item.id
            ? { ...movieItem, quantity: movieItem.quantity - 1 }
            : movieItem
        )
      );
    }
  };

  // Clear seen movies
  const clearSeenMovies = () => {
    setMovieItems([]);
  };

  useEffect(() => {
    localStorage.setItem("movieItems", JSON.stringify(movieItems));
  }, [movieItems]);

  useEffect(() => {
    const movieItems = localStorage.getItem("movieItems");
    if (movieItems) {
      setMovieItems(JSON.parse(movieItems));
    }
  }, []);

  return (
    <MovieContext.Provider
      value={{
        movieItems,
        seenMoviesTotalQuantity,
        addToSeenMovies,
        removeFromSeenMovies,
        clearSeenMovies,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export { MovieProvider, MovieContext };

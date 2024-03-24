import { useState, useEffect } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import "./MyMovies.css";

import { FiEye } from "react-icons/fi";

function MyMovies() {
  const [show, setShow] = useState(false);
  const [numberOfMovies, setNumberOfMovies] = useState(0);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const myMoviesFromStorage = JSON.parse(localStorage.getItem("myMovies"));

  useEffect(() => {
    const handleStorageChange = () => {
      if (myMoviesFromStorage) {
        setNumberOfMovies(myMoviesFromStorage.length);
      } else {
        setNumberOfMovies(0);
      }
    };

    window.addEventListener("storage", handleStorageChange);
    handleStorageChange();

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  useEffect(() => {
    const updateMyMoviesListener = () => {
      setNumberOfMovies((prevCount) => prevCount + 1);
    };

    window.addEventListener("updateMyMovies", updateMyMoviesListener);

    return () => {
      window.removeEventListener("updateMyMovies", updateMyMoviesListener);
    };
  }, []);

  return (
    <>
      <div className="my_movies" onClick={handleShow}>
        <p>{numberOfMovies}</p>
        <FiEye />
      </div>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>My Favorite Movies</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {myMoviesFromStorage.map((movie) => (
            <div
              key={movie.id}
              style={{
                display: "flex",
                gap: "0.5rem",
                alignItems: "center",
                marginBottom: "0.5rem",
                height: "50px",
                backgroundColor: "yellow",
              }}
            >
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.image}`}
                alt={movie.title}
                height="50"
              />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  height: "100%",
                  margin: 0,
                  padding: 0,
                }}
              >
                <p>{movie.title}</p>
                <p>
                  <i className="fa-solid fa-xmark"></i> Delete
                </p>
              </div>
            </div>
          ))}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default MyMovies;

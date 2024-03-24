import { useState, useEffect } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import "./MyMovies.css";

import { FiEye } from "react-icons/fi";

function MyMovies() {
  const [show, setShow] = useState(false);
  const [numberOfMovies, setNumberOfMovies] = useState(0);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    const handleStorageChange = () => {
      const myMoviesFromStorage = JSON.parse(localStorage.getItem("myMovies"));
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
          <Offcanvas.Title>My Movies</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default MyMovies;

import { useState, useContext } from "react";
import { Offcanvas, Button, Col } from "react-bootstrap";
import "./SeenMovies.css";
import { MovieContext } from "../../context/MovieContext";

import { FiEye } from "react-icons/fi";

function SeenMovies() {
  const [show, setShow] = useState(false);

  const {
    movieItems,
    seenMoviesTotalQuantity,
    removeFromSeenMovies,
    clearSeenMovies,
  } = useContext(MovieContext);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="my_movies" onClick={handleShow}>
        <p>{seenMoviesTotalQuantity}</p>
        <FiEye />
      </div>

      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Movies I have seen</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {movieItems.map((movie) => (
            <Col
              key={movie.id}
              style={{
                display: "flex",
                gap: "1rem",
                justifyContent: "spaceBetween",
                alignItems: "center",
                marginBottom: "0.5rem",
              }}
            >
              <Col>
                <img
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  alt={movie.title}
                  height="50"
                />
              </Col>

              <span style={{ margin: 0 }}>{movie.title}</span>
              <Button
                variant="danger"
                style={{ borderRadius: "50%" }}
                onClick={() => removeFromSeenMovies(movie)}
              >
                <i className="fa-solid fa-xmark"></i>
              </Button>
            </Col>
          ))}
          {seenMoviesTotalQuantity > 0 ? (
            <Button
              variant="outline-secondary"
              onClick={clearSeenMovies}
              style={{
                marginTop: "2rem",
              }}
            >
              Clear the list
            </Button>
          ) : null}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default SeenMovies;

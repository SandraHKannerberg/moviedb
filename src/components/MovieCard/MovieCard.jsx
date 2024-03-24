import { Card, Col } from "react-bootstrap";
import MarkAsSeenBtn from "../MarkAsSeenBtn/MarkAsSeenBtn";
import { Link } from "react-router-dom";
import "./MovieCard.css";

function MovieCard({ movie }) {
  return (
    <Card
      className="movie_card"
      style={{
        width: "18rem",
        minHeight: "435px",
        border: 0,
        boxShadow: "0px 0px 10px 0px rgba(255, 255, 255, 0.75)",
      }}
    >
      <Link to={`${movie.id}`} key={movie.id}>
        <Card.Img
          variant="top"
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        />
      </Link>

      <Card.Body className="movie_card_info">
        <Card.Title>
          <h6>{movie.original_title}</h6>
        </Card.Title>
        <Col
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "1rem",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "0.5rem",
            }}
          >
            <i className="fa-brands fa-imdb" style={{ fontSize: "2rem" }}></i>{" "}
            {movie.vote_average.toFixed(1)}
          </div>

          <MarkAsSeenBtn movie={movie} />
        </Col>
      </Card.Body>
    </Card>
  );
}

export default MovieCard;

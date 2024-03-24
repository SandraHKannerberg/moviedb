import MarkAsSeenBtn from '../MarkAsSeenBtn/MarkAsSeenBtn';
import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
import "./MovieDetails.css";

function MovieDetails() {

  const [movie, setMovie] = useState();

  const {id} = useParams();

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${
        import.meta.env.VITE_API_KEY
      }`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovie(data);
      });
  }, []);

 
  return movie ? (
    <div className='movie_details'>
      {/* Movie poster */}
      <div
        className='image_container'
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w500/${movie.backdrop_path})`,
        }}
      >
        <div className='overlay'></div>
      </div>

      {/* Movie info */}
      <div className='movie_info'>
        <div className='top_info'>
          <h2>{movie.title}</h2>

          { movie.status === "Released" ? (
            <div className='rating_info'>
              <p style={{marginBottom: 0, padding: 0}}><i className="fa-brands fa-imdb" style={{fontSize: '2rem'}}></i> {movie.vote_average.toFixed(1)}</p>
            </div>
          ) : (null)}

          { movie.status !== "Released" ? (
            <p>Release Date: {movie.release_date}</p>
          ) : (null)}
        </div>

          {/* Movie description */}  
          <p>{movie.overview}</p>

          {/* Movie genre */}    
          <div className='genre_info' style={{display: 'flex', gap: '10px', justifyContent: 'center'}}>
            {movie.genres.map((genre) => (
              <p key={genre.id}> {genre.name}</p>
            ))}
          </div>

          <MarkAsSeenBtn movie={movie} />
      </div>
    </div>
  ) : (
    "Loading..."
  );
}

export default MovieDetails;

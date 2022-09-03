import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <div className="movie-image">
        <img
          src={`https://image.tmdb.org/t/p/w1280${movie.poster_path}`}
          alt=""
        />
      </div>
      <div className="movie-description">
        <h3>{movie.title}</h3>
        <Link to={`/movie/${movie.id}`} className="btn-details">
          Ver Detalhes
        </Link>
      </div>
    </div>
  );
};

export default MovieCard;
